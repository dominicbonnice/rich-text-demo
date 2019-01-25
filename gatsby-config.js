const { BLOCKS, INLINES } = require('@contentful/rich-text-types')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      }
    },
    {
      resolve: '@contentful/gatsby-transformer-contentful-richtext',
      options: {
        renderOptions: {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node => {
              return `<img src="${
                node.data.target.fields.file['en-US'].url
              }" alt="${
                node.data.target.fields.title['en-US']
              }"/>`
            },
            [INLINES.EMBEDDED_ENTRY]: node => {
              const contentType = node.data.target.sys.contentType.sys.id;
              if (contentType == 'inlineMicrocopy') {
                return `<span>
                    ${node.data.target.fields.value['en-US']}
                  <span/>`
              } else {
                return ''
              }
            }
          },
        },
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
