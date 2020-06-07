import React from "react"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import { transformToSlug } from "../utils/general.util"

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      articles {
        id
        title
        content
      }
    }
  }
`

const AuthorTemplate = ({ data }) => {
  const author = data.strapiUser
  return (
    <Layout>
      <SEO title={`${author.username}'s articles`} />

      <h1>{author.username}</h1>

      <ul>
        {author.articles.map(article => (
          <li key={article.id}>
            <h2>
              <Link to={`/${transformToSlug(article.title)}`}>
                {article.title}
              </Link>
            </h2>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default AuthorTemplate
