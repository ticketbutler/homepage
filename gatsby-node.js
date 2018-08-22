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
          feature_page {
            heading
            text
            items {
              image
              alt
              name
            }
          }
          logo_section{
            heading
            items{
              image
              alt
            }
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

  Testimonials: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/testimonials/"}}) {
    edges {
      node {
        frontmatter {
          placeit
          path
          items {
            image
            text
            about
            logo
          }
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

        let { Pages, TopMenu, FooterMenu, Contact, Testimonials } = res.data;

        let testimonials = Testimonials.edges.map(t => {
          // console.log(t.node.frontmatter.items);
          return {
            ...t.node.frontmatter,
            type: "testimonial"
          };
        });

        // console.log(testimonials[1].node.frontmatter.items);

        Pages.edges.forEach(({ node }) => {
          let sections = [];
          if (node.frontmatter.path === testimonials[0].path) {
            node.frontmatter.sections.forEach((s, i) => {
              if (i === testimonials[0].placeit) {
                testimonials[0] && sections.push(testimonials[0]);
              }
              // if (i === 5) {
              //   testimonials[1] && sections.push(testimonials[1]);
              // }
              sections.push(s);
            });
          } else {
            sections = node.frontmatter.sections;
          }
          createPage({
            path: node.frontmatter.path,
            component: Component,
            layout: null,
            context: {
              pages_path: node.frontmatter.path,
              sections,
              // logo_section: node.frontmatter.logo_section,
              // testimonials: node.frontmatter.testimonials,
              // feature_page: node.frontmatter.feature_page,
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
