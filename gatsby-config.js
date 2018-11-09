module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links",
    "styled-jsx/babel",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-facebook-pixel",
      options: {
        pixelId: "280686579243661"
      }
    }
  ]
};
