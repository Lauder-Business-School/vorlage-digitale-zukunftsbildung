// Single source of truth for the Content-Security-Policy.
// CommonJS, weil next.config.js die Datei direkt requiren muss (kein TS-Loader dort).
// Der Guard-Test daneben (csp.test.ts) haelt die Quellen-Syntax fest.

/**
 * @param {string | undefined} nodeEnv Wert von process.env.NODE_ENV
 * @returns {string} vollstaendiger CSP-Header-Wert
 */
function buildContentSecurityPolicy(nodeEnv) {
  // Positiv auf 'development' pruefen, nicht `!== 'production'`: sonst wuerde jeder
  // unbekannte NODE_ENV-Wert die Lockerungen still mitnehmen.
  const isDev = nodeEnv === 'development'

  const scriptSrc = [
    "script-src 'self'",
    "'unsafe-inline'",
    ...(isDev ? ["'unsafe-eval'"] : []),
  ].join(' ')

  return [
    "default-src 'self'",
    scriptSrc,
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self'",
    "img-src 'self' data: https://img.youtube.com https://i.ytimg.com",
    "frame-src https://www.youtube-nocookie.com",
    "connect-src 'self' https://*.supabase.co",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    // Modern replacement for X-Frame-Options (kept above for legacy browsers)
    "frame-ancestors 'self'",
    // Only in production: would rewrite http://localhost assets in dev
    ...(nodeEnv === 'production' ? ['upgrade-insecure-requests'] : []),
  ].join('; ')
}

module.exports = { buildContentSecurityPolicy }
