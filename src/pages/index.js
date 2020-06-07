import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { transformToSlug } from "../utils/general.util"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" description="some descriptions" />
    <h1>Hi people</h1>
    <p>Welcome to the new kastrat AUISS blog.</p>
    {data.allStrapiArticle.edges.map(({ node }) => (
      <div key={node.id}>
        <Img fixed={node.image.childImageSharp.fixed} />
        <Link to={`/${transformToSlug(node.title)}`}>
          <h5>{node.title}</h5>
        </Link>
      </div>
    ))}
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          strapiId
          id
          title
          content
          image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
