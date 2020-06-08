import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleCard from "../components/article-card"
import style from "../styles/index-page.module.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" description="some descriptions" />
    <div className={style.index}>
      {data.allStrapiArticle.edges.map(({ node }) => {
        const { title, image, author, created_at, content } = node
        return (
          <ArticleCard
            key={node.id}
            title={title}
            image={image.childImageSharp.fixed}
            author={author.username}
            created_at={created_at}
            content={content}
            excerpt="Berasal dari Bahasa Latin, corona secara harafiah berarti “mahkota”. Mungkin kalian akan berpikir kita akan membahas mengenai kerajaan yang baru-baru ini sedang viral, namun kali ini kita tidak (belum) membahas mengenai itu. Corona yang satu ini jelas bukan merupakan “mahkota” yang mau kita kenakan."
          />
        )
      })}
    </div>
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
              fixed(width: 300, height: 170) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          author {
            id
            username
          }
          created_at
        }
      }
    }
  }
`
