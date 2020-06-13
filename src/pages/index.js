import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleCard from "../components/article-card"
import style from "../styles/index-page.module.scss"
import { Container } from "react-bootstrap"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Latest article from us"
      description="Blog for Strategic Research Department of Asia Pacific University Indonesian Student Society"
    />
    <Container>
      <h5>Latest articles</h5>
      <br />
      <div className={style.index}>
        {data.allStrapiArticle.edges.map(({ node }) => {
          const {
            title,
            image,
            author,
            published_date,
            content,
            excerpt,
          } = node
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
    </Container>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle(sort: { order: DESC, fields: published_date }) {
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
