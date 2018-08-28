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

  LogoSection: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/logo_sections/"}}) {
    edges {
      node {
        frontmatter {
          placeit
          path
          heading
          items {
            image
          }
        }
      }
    }
  }
  
  FeatureSection: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/features_sections/"}}) {
    edges {
      node {
        frontmatter {
          placeit
          path
          heading
          text
          items {
            link
            image
            alt
            name
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

        let {
          Pages,
          TopMenu,
          FooterMenu,
          Contact,
          Testimonials,
          LogoSection,
          FeatureSection
        } = res.data;

        let testimonials = Testimonials.edges.map(t => {
          return {
            ...t.node.frontmatter,
            type: "testimonial"
          };
        });
        let logos = LogoSection.edges.map(t => {
          return {
            ...t.node.frontmatter,
            type: "logo_section"
          };
        });
        let feature = FeatureSection.edges.map(t => {
          return {
            ...t.node.frontmatter,
            type: "feature_section"
          };
        });

        Pages.edges.forEach(({ node }) => {
          let sections = [];
          ////////////////////////////
          // Testimonals Sectioins
          ////////////////////////////
          if (node.frontmatter.path === testimonials[0].path) {
            node.frontmatter.sections.forEach((s, i) => {
              if (i === testimonials[0].placeit) {
                testimonials[0] && sections.push(testimonials[0]);
              }
              sections.push(s);
            });
          }
          ////////////////////////////
          // Logo  Sectioins
          ////////////////////////////
          else if (node.frontmatter.path === logos[0].path) {
            node.frontmatter.sections.forEach((s, i) => {
              if (i === logos[0].placeit) {
                logos[0] && sections.push(logos[0]);
              }
              sections.push(s);
            });
          } else if (node.frontmatter.path === logos[1].path) {
            node.frontmatter.sections.forEach((s, i) => {
              if (i === logos[1].placeit) {
                logos[1] && sections.push(logos[1]);
              }
              sections.push(s);
            });
          } else if (node.frontmatter.path === logos[2].path) {
            node.frontmatter.sections.forEach((s, i) => {
              if (i === logos[2].placeit) {
                logos[2] && sections.push(logos[2]);
              }
              sections.push(s);
            });
          }
          ////////////////////////////
          // Feature Sectioins
          ////////////////////////////
          else if (node.frontmatter.path === feature[0].path) {
            node.frontmatter.sections.forEach((s, i) => {
              if (i === feature[0].placeit) {
                feature[0] && sections.push(feature[0]);
              }
              sections.push(s);
            });
          } else if (node.frontmatter.path === feature[1].path) {
            node.frontmatter.sections.forEach((s, i) => {
              if (i === feature[1].placeit) {
                feature[1] && sections.push(feature[1]);
              }
              sections.push(s);
            });
          } else if (node.frontmatter.path === feature[2].path) {
            node.frontmatter.sections.forEach((s, i) => {
              if (i === feature[2].placeit) {
                feature[2] && sections.push(feature[2]);
              }
              sections.push(s);
            });
          } else if (node.frontmatter.path === feature[3].path) {
            node.frontmatter.sections.forEach((s, i) => {
              if (i === feature[3].placeit) {
                feature[3] && sections.push(feature[3]);
              }
              sections.push(s);
            });
          } else if (node.frontmatter.path === feature[4].path) {
            node.frontmatter.sections.forEach((s, i) => {
              if (i === feature[4].placeit) {
                feature[4] && sections.push(feature[4]);
              }
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
