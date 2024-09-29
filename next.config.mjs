/** @type {import('next').NextConfig} */

const nextConfig = {
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rh7112.github.io",
      },
    ],
  },
};

export default nextConfig;
