const lost = require('lost');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  siteMetadata: {
    url: 'https://melanieseltzer.io',
    title: 'Melanie Seltzer',
    welcome: "Hi! I'm Melanie 👋",
    subtitle:
      "I'm a Front End Developer living in sunny Los Angeles. I enjoy creating cool stuff and learning everything I can in the process 😄",
    copyright: 'Made with ❤️ using Gatsby.js',
    menu: [
      {
        label: 'Projects',
        path: '/'
      },
      {
        label: 'Writing',
        path: '/blog'
      },
      {
        label: 'About',
        path: '/about'
      },
      {
        label: 'Contact',
        path: '/contact'
      }
    ],
    author: {
      name: 'Melanie',
      email: 'melleh11@gmail.com',
      twitter: 'melanieseltzer',
      github: 'melanieseltzer'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: { wrapperStyle: 'margin-bottom: 1.0725rem' }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files'
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-73379983-2' }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['roboto:400,400i,500,700']
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
            {
              site {
                siteMetadata {
                  url
                }
              }
              allSitePage(
                filter: {
                  path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
                }
              ) {
                edges {
                  node {
                    path
                  }
                }
              }
          }`,
        output: '/sitemap.xml',
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => ({
            url: site.siteMetadata.url + edge.node.path,
            changefreq: 'daily',
            priority: 0.7
          }))
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          lost(),
          pxtorem({
            rootValue: 16,
            unitPrecision: 5,
            propList: [
              'font',
              'font-size',
              'line-height',
              'letter-spacing',
              'margin',
              'margin-top',
              'margin-left',
              'margin-bottom',
              'margin-right',
              'padding',
              'padding-top',
              'padding-left',
              'padding-bottom',
              'padding-right',
              'border-radius',
              'width',
              'max-width'
            ],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0
          })
        ],
        precision: 8
      }
    }
  ]
};
