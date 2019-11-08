

import React from "react"
import "./layout.css"
import "./header.css"

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      background: `Grey`,
      margin: `5% 0 0 0`,
      padding:`8%` 
    }}
  > © {new Date().getFullYear()}, Built by 
  <a href="https://www.linkedin.com/in/pankajan05/">Pankajan Satkunam</a></footer>
)
  
export default Footer