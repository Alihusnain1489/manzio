// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Let Next.js know about external origins allowed during dev
  allowedDevOrigins: ['http://192.168.1.5:3000'],

  // Optional: crossOrigin attribute for script tags, if needed elsewhere
  // crossOrigin: 'anonymous',

  // Ensure correct workspace root if needed
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;
