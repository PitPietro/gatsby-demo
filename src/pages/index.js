import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1 className="index-title">Fullstack Dev</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug} className="index-post-link">
              <h3 className="index-h3">
                {node.frontmatter.title}{" "}
                <span className="index-span">
                ~ {node.frontmatter.date}
              </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD/MM/YY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

/*
https://www.gatsbyjs.com/docs/how-to/styling/using-web-fonts/

Fonts:
https://fonts.google.com/specimen/Josefin+Slab
/Monoton
/Baskervville
/Redressed
/Bungee+Outline
 */