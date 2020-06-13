/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown"
import emoji from "emoji-dictionary"

import "../styles/index.scss"
import style from "../styles/layout.module.scss"
import Navbar from "./navbar"
import { Container } from "react-bootstrap"

const Layout = ({ children }) => {
  const emojiSupport = text =>
    text.value.replace(/:\w+:/gi, name => emoji.getUnicode(name))

  const footerText = `© ${new Date().getFullYear()}, Made with :heart: by [alkafaiz](https://www.instagram.com/alkafaiz) for [auiss](https://www.instagram.com/auiss_official)`
  return (
    <div className={style.body}>
      <Navbar />
      <main>{children}</main>
      <Container>
        <footer className={style.footer}>
          <ReactMarkdown
            source={footerText}
            renderers={{ text: emojiSupport }}
          />
        </footer>
      </Container>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
