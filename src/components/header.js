import PitImg from "../images/pit_logo.png"
import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"


export default function Header() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <>
      <Link to={`/`}>
        <img alt="" src={PitImg} width="40" height="40" className="d-inline-block align-top" />
        <h3 className="header-h3">
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link to={`/about/`} className="header-link-right">
        About
      </Link>

    </>
  )
}