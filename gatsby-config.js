module.exports = {
  siteMetadata: {
    siteUrl: 'https://ticketbutler.io'
  }
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links",
    "styled-jsx/babel",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap"
    {
      resolve: "gatsby-plugin-facebook-pixel",
      options: {
        pixelId: "280686579243661"
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "4445882796",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false

        // Specify optional GTM environment details.
        //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
      }
    }
  ]

};
