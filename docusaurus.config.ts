// import i18nConfig = require('./config/i18n.config');
import type {Config} from '@docusaurus/types';
import navbarConfig = require('./config/navbar.config');
import footerConfig = require('./config/footer.config');

const config: Config = {
  tagline: '我的心已被代码夺去，此生或许再无悲喜',
  title: '前端宝藏，谁会找到呢',
  url: 'https://lavard.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  // i18n: i18nConfig,
  projectName: 'lalalavard.github.io',
  organizationName: 'lalalavard',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // sidebarPath: require.resolve('./config/sidebars.config.js'),
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: '全部博文',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    // '@docusaurus/theme-live-codeblock',
    'docusaurus-plugin-sass',
    '@docusaurus/plugin-ideal-image',
    // {
    //   quality: 70,
    //   max: 1030, // 最大缩放图片尺寸。
    //   min: 640, // 最小缩放图片尺寸。 如果原始值比这还低，会使用原图尺寸。
    //   steps: 2, // 在 min 和 max 之间最多生成的图片数量（包含两端点）
    //   disableInDev: false,
    // },
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
  themeConfig: {
    algolia: {
        appId: '1ZY741ILUR',
        apiKey: '4ef71d2554db6af0cfddbe00c548855c',
        indexName: 'lavard',
    },
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
      navbar: navbarConfig,
      footer: footerConfig,
    },
};

module.exports = config;
