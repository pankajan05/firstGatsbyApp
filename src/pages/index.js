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
    <p>I'm pankajan satkunam. I am Software Engineer Undergraduate student and University
     of Kelaniya. I am an full stack webdeveloper. I like to learn new technologies that is why i build this site.</p>
    <p>Here I am built this website for learn the Gatsby framework. If you like to create like this then you can contact me through the link.</p>
    <p>Here is <a href='http://pankajan.me/resume/'>my online CV</a> you can go through it.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/contact">Contact</Link>
  </Layout>
)

export default IndexPage
