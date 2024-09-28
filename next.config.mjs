/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  ...(isProduction && {
    basePath: "/personal-portfolio",
    output: "export",
    reactStrictMode: true,
  }),
  images: {
    domains: ["rh7112.github.io"]
  },
};

export default nextConfig;
