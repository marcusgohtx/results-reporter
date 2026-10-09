const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
// GitHub project Pages uses a repository prefix; ChatGPT Sites serves at /.
const basePath = process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS === 'true' && repositoryName
  ? '/' + repositoryName
  : '';

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
