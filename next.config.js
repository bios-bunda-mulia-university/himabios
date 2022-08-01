/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['bios-space.sfo3.digitaloceanspaces.com']
  },
}

module.exports = nextConfig
