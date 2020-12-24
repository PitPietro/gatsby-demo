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