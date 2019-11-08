import { Link } from "gatsby"
import PropTypes from "prop-types"

import React from "react"
import "./layout.css"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `green`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div>
      <ul>
        <li><Link class="link" to="/" >Home</Link></li>
        <li><Link class="link" to="/skills">Skill</Link></li>
        <li><Link class="link" to="/about">About</Link></li>
        <li><Link class="link" to="/contact">Contact</Link></li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `GreenNature`,
}

export default Header
