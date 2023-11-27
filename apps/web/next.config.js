/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/*.png',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        port: '',
        pathname: '**/*.jpg',
      },
    ],
  },
}

module.exports = nextConfig
