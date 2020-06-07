import React from "react"
import { graphql, Link } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"
import { transformToSlug } from "../utils/general.util"

export const query = graphql`
  query ArticleQuery($id: Int!) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      content
      created_at
      image {
        publicURL
        childImageSharp {
          fluid(maxWidth: 920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      author {
        username
      }
    }
  }
`

const Article = ({ data }) => {
  const article = data.strapiArticle
  return (
    <Layout>
      <SEO title={article.title} />
      <div>
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
          data-src={article.image.publicURL}
          data-srcset={article.image.publicURL}
          data-uk-img
        >
          <h1>{article.title}</h1>
        </div>
        <p>
          By{" "}
          <span>
            <Link to={`/author/${transformToSlug(article.author.username)}`}>
              {article.author.username}
            </Link>
          </span>{" "}
          at <Moment format="MMM Do YYYY">{article.created_at}</Moment>
        </p>

        <Img fluid={article.image.childImageSharp.fluid} />
        <br />

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <div style={{ textAlign: "justify" }}>
              <ReactMarkdown source={article.content} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article
