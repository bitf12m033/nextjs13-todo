/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/api/:path*', // The :path parameter is used here so will not be automatically passed in the query
      },
    ]
  },
}

module.exports = nextConfig
