import React from "react"
import { graphql, Link } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import Img from "gatsby-image"
import { DiscussionEmbed } from "disqus-react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import { transformToSlug, longStringHelper } from "../utils/general.util"
import style from "../styles/article.module.scss"
import { Container } from "react-bootstrap"

export const query = graphql`
  query ArticleQuery($id: Int!) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      content
      excerpt
      created_at
      image {
        publicURL
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
          resize(width: 400) {
            src
            height
            width
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

  const articleSlug = transformToSlug(article.title)

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: {
      url: `https://kastrat-auiss.netlify.app/${articleSlug}`,
      title: article.title,
      identifier: articleSlug,
    },
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
      <SEO
        title={article.title}
        description={longStringHelper(article.excerpt).truncate(160, 1)}
        image={article.image.childImageSharp.resize}
        pathname={`/${articleSlug}`}
      />
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
