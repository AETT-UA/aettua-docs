// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AETTUA Docs",
  tagline: "AETTUA Documentation",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://AETT-UA.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/aettua-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "AETT-UA", // Usually your GitHub org/user name.
  projectName: "aettua-docs", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "AETTUA Docs",
        logo: {
          alt: "AETTUA Logo",
          src: "img/aettua-logo/logo-blue.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            to: 'https://github.com/AETT-UA',
            position: 'right',
            target: '_blank',
            className: 'github-link',
          },
          {
            to: 'https://www.instagram.com/aettua/',
            position: 'right',
            target: '_blank',
            className: 'instagram-link',

          },
          {
            to: 'https://drive.google.com/drive/u/1/folders/1_sMcUS5gTc-gWJTwV-Tf5FvSEoQfxJhK',
            position: 'right',
            target: '_blank',
            className: 'drive-link',
          },
          {
            to: 'https://www.aettua.pt/',
            position: 'right',
            label: 'Website',
            target: '_blank',
            className: 'website-link',
          }
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "Home",
          //   items: [
          //     {
          //       label: "Website",
          //       href: "https://www.aettua.pt/",
          //     },
          //   ],
          // },
          // {
          //   title: "Social",
          //   items: [
          //     {
          //       label: "Instagram",
          //       href: "https://www.instagram.com/aettua/",
          //     },
          //   ],
          // },
          // {
          //   title: "More",
          //   items: [
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/aett-ua/",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AETTUA. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
