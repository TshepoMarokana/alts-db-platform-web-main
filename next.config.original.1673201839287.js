// const withPreact = require('next-plugin-preact')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    loader: 'custom'
  },
  trailingSlash: true
}
