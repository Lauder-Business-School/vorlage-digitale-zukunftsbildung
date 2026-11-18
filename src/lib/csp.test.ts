import { describe, it, expect } from 'vitest'
import { buildContentSecurityPolicy } from './csp'

/** Alle Host-Quellen einer Policy — Keywords ('self') und Schema-Quellen (data:) fallen raus. */
function hostSources(policy: string): string[] {
  return policy
    .split(';')
    .flatMap((directive) => directive.trim().split(/\s+/).slice(1))
    .filter((source) => source.length > 0)
    .filter((source) => !source.startsWith("'")) // 'self', 'unsafe-inline', 'nonce-…'
    .filter((source) => !/^[a-z][a-z0-9+.-]*:$/i.test(source)) // data:, blob:, https:
    .filter((source) => source !== 'upgrade-insecure-requests')
}

/**
 * Der Stern ist in einer CSP-Quelle nur als ganzer Host ('*') oder als komplettes
 * linkes Label ('*.host.tld') erlaubt. Steht er mitten im Label ('o*.host.tld'),
 * verwirft der Browser die GANZE Quelle — still, die Direktive bleibt gültig.
 */
function hasInvalidWildcard(source: string): boolean {
  const host = source
    .replace(/^[a-z][a-z0-9+.-]*:\/\//i, '') // Schema weg
    .split('/')[0] // Pfad weg
    .split(':')[0] // Port weg
  if (!host.includes('*')) return false
  return host !== '*' && !/^\*\.[^*]+$/.test(host)
}

describe('hasInvalidWildcard (Wächter über den Wächter)', () => {
  it.each(['https://o*.ingest.sentry.io', 'https://host.*.tld', 'https://*.*.tld', 'https://va.*'])(
    'erkennt %s als ungültig',
    (source) => {
      expect(hasInvalidWildcard(source)).toBe(true)
    },
  )

  it.each(['https://*.supabase.co', '*', 'data:', "'self'"])(
    'lässt %s durch',
    (source) => {
      expect(hasInvalidWildcard(source)).toBe(false)
    },
  )
})

describe('buildContentSecurityPolicy', () => {
  const environments = ['development', 'production', 'test', undefined]

  it.each(environments)('enthält in NODE_ENV=%s keine ungültige Wildcard', (nodeEnv) => {
    const invalid = hostSources(buildContentSecurityPolicy(nodeEnv)).filter(hasInvalidWildcard)
    expect(invalid).toEqual([])
  })

  it('erlaubt unsafe-eval nur in development', () => {
    expect(buildContentSecurityPolicy('development')).toContain("'unsafe-eval'")
    expect(buildContentSecurityPolicy('production')).not.toContain("'unsafe-eval'")
  })

  it('nimmt Dev-Lockerungen bei unbekanntem NODE_ENV nicht mit', () => {
    for (const nodeEnv of ['test', 'staging', undefined]) {
      const policy = buildContentSecurityPolicy(nodeEnv)
      expect(policy).not.toContain("'unsafe-eval'")
    }
  })

  it('setzt upgrade-insecure-requests nur in production', () => {
    expect(buildContentSecurityPolicy('production')).toContain('upgrade-insecure-requests')
    expect(buildContentSecurityPolicy('development')).not.toContain('upgrade-insecure-requests')
  })

  it('enthält keine produktiven Sentry-, Bunny- oder Vercel-Analytics-Hosts und erlaubt Supabase', () => {
    const policy = buildContentSecurityPolicy('production')
    expect(policy).not.toContain('sentry')
    expect(policy).not.toContain('mediadelivery.net')
    expect(policy).not.toContain('b-cdn.net')
    expect(policy).not.toContain('vercel-scripts.com')
    expect(policy).toBe(
      [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline'",
        "style-src 'self' 'unsafe-inline'",
        "font-src 'self'",
        "img-src 'self' data: https://img.youtube.com https://i.ytimg.com",
        "frame-src https://www.youtube-nocookie.com",
        "connect-src 'self' https://*.supabase.co",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "frame-ancestors 'self'",
        'upgrade-insecure-requests',
      ].join('; '),
    )
  })
})
