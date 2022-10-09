/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfig = {
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  env: {
    HTTP_ENDPOINT: process.env.HTTP_ENDPOINT,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPWA(nextConfig);
