import React from "react"
import { graphql, Link } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import Img from "gatsby-image"
import { DiscussionEmbed } from "disqus-react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import { transformToSlug } from "../utils/general.util"
import style from "../styles/article.module.scss"
import { Container } from "react-bootstrap"

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
          fluid(maxWidth: 1920) {
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
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: transformToSlug(article.title) },
  }

  React.useEffect(() => {
    function trackScroll(params) {
      //console.log(params.path[1].scrollY)
      // CONTINUE: track scroll to bottom to appear scroll top button
    }

    document.addEventListener("scroll", trackScroll)
    return () => {
      document.removeEventListener("scroll", trackScroll)
    }
  }, [])

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
        ></div>

        <Img fluid={article.image.childImageSharp.fluid} />

        <br />
        <Container>
          <article className={style.articleContainer}>
            <h1 className={style.title}>{article.title}</h1>
            <p className={style.articleInfo}>
              By{" "}
              <span>
                <Link
                  to={`/author/${transformToSlug(article.author.username)}`}
                >
                  {article.author.username}
                </Link>
              </span>{" "}
              on <Moment format="MMMM Do YYYY">{article.created_at}</Moment>
            </p>

            <br />

            <div className="uk-section">
              <div className="uk-container uk-container-small">
                <div className={style.section}>
                  <ReactMarkdown source={article.content} />
                </div>
              </div>
            </div>
          </article>

          <br />
          <div className={style.articleContainer}>
            <DiscussionEmbed {...disqusConfig} />
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default Article
