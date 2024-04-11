/** @type {import('next').NextConfig} */

const nextConfig = () => {
  return {
    reactStrictMode: false,
    swcMinify: true,
    basePath: "",
    images: {
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
    async rewrites() {
      return [
        {
          source: "/robots.txt",
          destination: `/api/robots?secret=lets_renovate`,
        },
        {
          source: "/sitemap.xml",
          destination: "/api/sitemap?secret=lets_renovate",
        },
      ];
    },
  };
};

module.exports = nextConfig();
