const path = require("path");

const query = `query IndexQuery {
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
            image_alt
            button_text
            button_link
          }
          // logo_section{
            
          //   heading
          //   items{
          //     image
          //     alt
          //   }
          // }  
          // testimonials{
          //   text
          //   image
          //   logo
          //   about
          // } 
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

          features {
            path
            label
          }

          integration {
            path
            label
          }

          company {
            path
            label
          }
        }
      }
    }
  }
  Contact: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/contact/"}}) {
    edges {
      node {
        frontmatter {
          title
          path
          address
          phone
          support
        }
      }
    }
  }

}`;

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    let Component = path.resolve("./src/pages/cms_page.js");

    resolve(
      graphql(query).then(res => {
        if (res.errors || res.messages) {
          reject(res.errors + " " + res.messages);
        }
        let { Pages, TopMenu, FooterMenu, Contact } = res.data;
        Pages.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: Component,
            layout: null,
            context: {
              sections: node.frontmatter.sections,
              // logo_section: node.frontmatter.logo_section,
              // testimonials: node.frontmatter.testimonials,
              layout: {
                TopMenu: TopMenu.edges[0].node.frontmatter.items,
                FooterMenu: FooterMenu.edges[0].node.frontmatter.items,
                Features: FooterMenu.edges[0].node.frontmatter.features,
                Integration: FooterMenu.edges[0].node.frontmatter.integration,
                Company: FooterMenu.edges[0].node.frontmatter.company,
                Contact: Contact.edges[0].node.frontmatter
              }
            }
          });
        });
      })
    );
  });
};
