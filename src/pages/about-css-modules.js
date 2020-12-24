import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"
import Layout from "../components/layout"


console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="avatar" />
    <div className={styles.description}>
      <h2 className={styles.username}>
        {props.username}
      </h2>
      <p className={styles.excerpt}>
        {props.excerpt}
      </p>
    </div>
  </div>
)

export default function About() {
  return (
    <Layout>
      <Container>
        <h1 className>About CSS Modules</h1>
        <p>CSS Modules are cool</p>
        <User
          username="Christian Bale"
          avatar="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.gOcA4QZSM9PZ1yRVcmAGSAHaKZ%26pid%3DApi&f=1"
          excerpt="I am Batman"
        />
      </Container>
    </Layout>
  )
}