/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Infima',
  tagline: 'React components for Infima styling framework',
  url: 'https://ugureren.net',
  baseUrl: '/react-infima/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'ugur-eren',
  projectName: 'react-infima',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs/components',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'React Infima',
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Components',
              to: 'components/alert',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ugur-eren/react-infima',
            },
          ],
        },
        {
          title: 'Legal - Infima',
          items: [
            {
              label: 'Privacy',
              href: 'https://opensource.facebook.com/legal/privacy/',
              target: '_blank',
              rel: 'noreferrer noopener',
            },
            {
              label: 'Terms',
              href: 'https://opensource.facebook.com/legal/terms/',
              target: '_blank',
              rel: 'noreferrer noopener',
            },
          ],
        },
      ],
    },
  },
};

module.exports = config;
