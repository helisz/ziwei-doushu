/** @type {import('next').NextConfig} */
// GitHub Pages 部署：仓库名即子路径。若 fork 后改名，改下面的 GITHUB_PAGES_REPO
// 或在 CI 里通过 BASE_PATH 环境变量覆盖。
const GITHUB_PAGES_REPO = 'ziwei-doushu';
const basePath = process.env.BASE_PATH ?? `/${GITHUB_PAGES_REPO}`;

const nextConfig = {
  transpilePackages: ['lunar-javascript'],

  // 静态导出：产物在 out/，可直接托管到 GitHub Pages
  output: 'export',
  trailingSlash: true, // Pages 对 /foo/ → /foo/index.html 的映射更稳
  images: { unoptimized: true }, // 静态导出不支持 Next 图片优化

  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
