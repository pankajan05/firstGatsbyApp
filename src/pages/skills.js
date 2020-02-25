import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"

const SkillPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>My Skills</h1>
    <ul>
      <li><p>Webdevelopment
        <ul>
          <li>html,css,php,javascript</li>
          <li>mean</li>
          <li>gatsby</li>
          <li>laravel</li>
        </ul></p>
      </li><p>
      <li>programming languages
      <ul>
        <li>Java</li>
        <li>c</li>
        <li>C++</li>
        <li>Arduino</li>
      </ul></li></p>
    </ul>
  </Layout>
)

export default SkillPage
