/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com", "via.placeholder.com"],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  // Add this to prevent API routes from being prerendered
  trailingSlash: false,
  // Ensure API routes are not statically generated
  generateStaticParams: false,
};

module.exports = nextConfig;