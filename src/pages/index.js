import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people,</h1>
    <p>Welcome to my new Gatsby site.</p>
    <p>Here I am built this website for learn the Gatsby framework. If you like to create like this then you can contact me through the link.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/contact">Contact</Link>
  </Layout>
)

export default IndexPage
