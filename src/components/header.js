import PitImg from "../images/pit_logo.png"
import React from "react"
import { css } from "@emotion/react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { rhythm } from "../utils/typography"



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
        <img alt="" src={PitImg} width="40" height="40" className="d-inline-block align-top"/>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>

    </>
  )
}