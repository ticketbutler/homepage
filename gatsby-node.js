const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    let Component = path.resolve("./src/pages/cms_page.js");
    resolve(
      graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  title
                  path
                  sections {
                    type
                    heading
                    text
                    image
                    button_text
                  }
                }
              }
            }
          }
        }
      `).then(res => {
        if (res.errors || res.messages) {
          reject(res.errors + " " + res.messages);
        }
        res.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: Component,
            context: {
              sections: node.frontmatter.sections
            }
          });
        });
      })
    );
  });
};
