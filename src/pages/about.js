import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/react"
import { Link } from "gatsby"

export default function About() {
    return (
      <Layout>
        <SEO title="About" />
          <h1>About me</h1>
          <p>
              I’m good enough, I’m smart enough, and gosh darn it, people like me!
          </p>
        <Link
          to={`/about-css-modules/`}
          css={css`
          float: right;
        `}
        >
          About CSS
        </Link>
      </Layout>
    )
}