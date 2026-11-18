const { buildContentSecurityPolicy } = require('./src/lib/csp')

/** @type {import('next').NextConfig} */
module.exports = {
  poweredByHeader: false,
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        { key: 'Content-Security-Policy', value: buildContentSecurityPolicy(process.env.NODE_ENV) },
        { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ],
    }]
  },
}
