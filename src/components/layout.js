/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import emoji from "emoji-dictionary"

import Header from "./header"
import style from "../styles/layout.module.scss"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const emojiSupport = text =>
    text.value.replace(/:\w+:/gi, name => emoji.getUnicode(name))

  const footerText = `© ${new Date().getFullYear()}, Made with :heart: by [alkafaiz](https://www.instagram.com/alkafaiz) for [auiss](https://www.instagram.com/auiss_official)`
  return (
    <div className={style.body}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={style.container}>
        <main>{children}</main>
      </div>
      <footer className={style.footer}>
        <ReactMarkdown source={footerText} renderers={{ text: emojiSupport }} />
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
