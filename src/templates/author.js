import React from "react"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import ArticleAuthorCard from "../components/article-author-card"

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      articles {
        id
        title
        content
        excerpt
        published_date
        image {
          childImageSharp {
            fixed(width: 350, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

const AuthorTemplate = ({ data }) => {
  const author = data.strapiUser
  return (
    <Layout>
      <SEO title={`${author.username}'s articles`} />

      <h1>{`${author.username}'s article`}</h1>

      <ul style={{ margin: 0 }}>
        {author.articles.map(article => {
          const { id, title, excerpt, published_date, content, image } = article
          return (
            <li key={id} style={{ listStyle: "none", margin: 0, padding: 0 }}>
              <ArticleAuthorCard
                title={title}
                image={image.childImageSharp.fixed}
                published_date={published_date}
                content={content}
                excerpt={excerpt}
              />
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default AuthorTemplate
