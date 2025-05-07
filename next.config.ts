const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/mortgage_calculator' : '',
  assetPrefix: isGithubPages ? '/mortgage_calculator/' : '',
};

export default nextConfig;
