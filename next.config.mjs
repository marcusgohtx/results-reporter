const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'results-reporter';
const basePath = process.env.NODE_ENV === 'production' ? '/' + repositoryName : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
