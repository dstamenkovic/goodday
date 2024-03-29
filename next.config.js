/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // typedRoutes: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
