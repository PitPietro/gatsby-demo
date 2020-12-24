import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/react"
import { graphql, Link } from "gatsby"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default function About({ data }) {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About {data.site.siteMetadata.title}</h1>
      <p className="p1">
        {data.site.siteMetadata.description}
      </p>
      <p>
        I’m very interested in online security, as technology has become increasingly invasive in our private lives!
      </p>
      <p>
        During the lockdown I had my first working experience. It was quite hard to balance the work and the last year
        of high school, but I did my best and I gained a lot of soft skills knowledge.
      </p>
      <p>
        I am also a sports addicted and I love everything about movement in general: I travel 10 km by bike every day to
        get to and from school instead of taking a couple of buses to cross the city. I have played basketball for a few
        years, then I did competitive swimming together with parkour (strictly outdoors), running race at an amateur
        level, water polo and now I’m practicing tricking (acrobatic martial arts). I love skiing and snorkeling too!
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