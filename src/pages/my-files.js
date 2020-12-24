import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"

export default function MyFiles({data}) {
  console.log(data)
  return (
    <Layout>
      <h1>
        MyFiles
      </h1>
      <table>
        <thead>
        <tr>
          <th>relativePath</th>
          <th>prettySize</th>
          <th>extension</th>
          <th>birthTime</th>
        </tr>
        </thead>
        <tbody>
        {data.allFile.edges.map(( {node}, index) => (
          <tr key={index}>
            <td><code>{node.relativePath}</code></td>
            <td><code>{node.prettySize}</code></td>
            <td><code>{node.extension}</code></td>
            <td><code>{node.birthTime}</code></td>
          </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`

/*
This query:
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          date
        }
        excerpt
        timeToRead
        html
      }
    }
  }
}

Will give as result:
{
  "data": {
    "allMarkdownRemark": {
      "edges": [
        {
          "node": {
            "frontmatter": {
              "title": "Sweet Pandas Eating Sweets",
              "date": "2020-12-24"
            },
            "excerpt": "Pandas are really sweet.\nHere's a video of a panda eating sweets.",
            "timeToRead": 1,
            "html": "<p>Pandas are really sweet.\nHere's a video of a panda eating sweets.</p>\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/4n0xNbfJLR8\" frameborder=\"0\" allowfullscreen></iframe>"
          }
        }
      ]
    }
  },
  "extensions": {}
}
 */