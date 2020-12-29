import React from "react"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import Header from "./header"
import "./layout.css"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Header />
      {children}
      <Footer />
    </div>
  )
}

/*
Static Query: https://www.gatsbyjs.com/docs/how-to/querying-data/static-query/
 */