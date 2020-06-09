import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleCard from "../components/article-card"
import style from "../styles/index-page.module.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" description="some descriptions" />
    <div className={style.index}>
      {data.allStrapiArticle.edges.map(({ node }) => {
        const { title, image, author, published_date, content, excerpt } = node
        return (
          <ArticleCard
            key={node.id}
            title={title}
            image={image.childImageSharp.fixed}
            author={author.username}
            published_date={published_date}
            content={content}
            excerpt={excerpt}
          />
        )
      })}
    </div>
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
          excerpt
          published_date
          image {
            childImageSharp {
              fixed(width: 300, height: 170) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          author {
            id
            username
          }
        }
      }
    }
  }
`
