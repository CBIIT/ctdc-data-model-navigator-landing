/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/ctdc-data-model-navigator-landing", // GitHub repo name
    assetPrefix: "/ctdc-data-model-navigator-landing/",
    trailingSlash: true, // Ensures paths include a trailing slash
};

module.exports = nextConfig;
