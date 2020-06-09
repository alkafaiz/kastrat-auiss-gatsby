import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import style from "../styles/header.module.scss"
import { Logo } from "./image"

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <div className={style.container}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" className={style.logo}>
          <Logo />
          {/* kastrat auiss */}
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/author">Author</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
