module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links",
    "styled-jsx/babel",
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-netlify-cms",
    `gatsby-plugin-sharp`,
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: __dirname + "/pages",
        name: `pages`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
};
