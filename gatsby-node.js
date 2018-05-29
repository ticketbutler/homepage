const path = require('path');
exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;

  const postTemplate = path.resolve('src/components/Header.js');

  return graphql(`{
    allMarkdownRemark {
      edges {
        node{
          html
          id
          frontmatter{
            path
            title
          }
        } 
      }
    }
  }`).then(res => {
    if(res.errors) {
      return Promise.reject(res.errors);
    }
      res.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
          path: node.frontmatter.path,
          component: postTemplate
        })
      });
  })
}
// const _ = require('lodash')
// const path = require('path')
// const { createFilePath } = require('gatsby-source-filesystem')

// exports.createPages = ({ boundActionCreators, graphql }) => {
//   const { createPage } = boundActionCreators

//   return graphql(`
//     {
//       allMarkdownRemark(limit: 1000) {
//         edges {
//           node {
//             id
//             fields {
//               slug
//             }
//             frontmatter {
//              title
//              tags
//               templateKey
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       result.errors.forEach(e => console.error(e.toString()))
//       return Promise.reject(result.errors)
//     }

//     const posts = result.data.allMarkdownRemark.edges

//     posts.forEach(edge => {
//       const id = edge.node.id
//       createPage({
//         path: edge.node.fields.slug,
//         tags: edge.node.frontmatter.tags,
//         component: path.resolve(
//           `src/components/${String(edge.node.frontmatter.templateKey)}.js`
//         ),
//         // additional data can be passed via context
//         context: {
//           id,
//         },
//       })
//     })

//     // Tag pages:
//     let tags = []
//     // Iterate through each post, putting all found tags into `tags`
//     posts.forEach(edge => {
//       if (_.get(edge, `node.frontmatter.tags`)) {
//         tags = tags.concat(edge.node.frontmatter.tags)
//       }
//     })
//     // Eliminate duplicate tags
//     tags = _.uniq(tags)

//     // Make tag pages
//     tags.forEach(tag => {
//       const tagPath = `/tags/${_.kebabCase(tag)}/`

//       createPage({
//         path: tagPath,
//         component: path.resolve(`src/components/header.js`),
//         context: {
//           tag,
//         },
//       })
//     })
//   })
// }

// exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
//   const { createNodeField } = boundActionCreators

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

