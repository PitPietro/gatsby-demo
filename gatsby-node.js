/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 * To implement an API, just export a function with the name of the API.
 *
 * onCreateNode function will be called by Gatsby whenever a new node is created (or updated).
 * createNodeField allows you to create additional fields on nodes created by other plugins.
 * Docs: https://www.gatsbyjs.com/docs/tutorial/part-seven/
 */

const path = require(`path`)
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/templates/blog.js")
  const tagTemplate = path.resolve("src/templates/tags.js")
  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)
  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const posts = result.data.postsRemark.edges
  // Create post detail pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
    })
  })
  // Extract tag data from query
  const tags = result.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

/*
The GraphQL query only looks for data you need to generate tags pages.
The query reference two allMarkdownRemark fields. To avoid naming collisions you must alias at least one of them.
In this case are both aliased to make the code human-readable.
`tag.name` is passed through in the `context`, it's the value that gets used in the TagPage query to limit
your search to only posts tagged with the tag in the URL.

 */