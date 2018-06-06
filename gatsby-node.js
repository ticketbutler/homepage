const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    let Component = path.resolve("./src/pages/cms_page.js");
    resolve(
      graphql(`
      query IndexQuery {
        Pages: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/"}}) {
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
        TopMenu: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/top-menu/"}}) {
          edges {
            node {
              frontmatter {
                title
                path
                items {
                  path
                  label
                }
              }
            }
          }
        }
        FooterMenu: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/footer-menu/"}}) {
          edges {
            node {
              frontmatter {
                title
                path
                items {
                  path
                  label
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
        let { Pages, TopMenu, FooterMenu } = res.data;
        Pages.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: Component,
            layout: null,
            context: {
              sections: node.frontmatter.sections,
              layout: {
                TopMenu: TopMenu.edges[0].node.frontmatter.items,
                FooterMenu: FooterMenu.edges[0].node.frontmatter.items
              }
            }
          });
        });
      })
    );
  });
};
