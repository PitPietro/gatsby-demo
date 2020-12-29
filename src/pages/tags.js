import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default function TagsPage(
  {
    data: {
      allMarkdownRemark: { group },
      site: {
        siteMetadata: { title }
      }
    }
  }) {
  return (
    <Layout>
      <Helmet title={title} />
      <div>
        <h1>Tags</h1>
        <table>
          <thead>
          <tr>
            <th>tag name</th>
            <th>n°</th>
          </tr>
          </thead>
          <tbody>
          {group.map(tag => (
            <tr>
              <td key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue}
                </Link>
              </td>
              <td>
                <code className="tags-num">{tag.totalCount}</code>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired
        }).isRequired
      )
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    })
  })
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`