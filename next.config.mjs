/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  ...(isProduction && {
    basePath: "/personal-portfolio",
    output: "export",
    reactStrictMode: true,
  }),
};

export default nextConfig;
