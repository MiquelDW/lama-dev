/** @type {import('next').NextConfig} */
const nextConfig = {
  // use this configuration to add external images in your application
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
