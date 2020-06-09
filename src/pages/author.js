import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AuthorCard from "../components/author-card"

export default function Author({ data }) {
  return (
    <Layout>
      <SEO title="Authors" description="some descriptions" />

      <h2>Thanks to all contributors</h2>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "flex-start",
        }}
      >
        {data.allStrapiUser.edges.map(({ node }) => {
          const { id, username, articles, profile, course } = node
          return (
            <AuthorCard
              key={id}
              author={username}
              profile={profile.childImageSharp.fixed}
              totalArticle={articles.length}
              course={course}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query authorQuery {
    allStrapiUser {
      edges {
        node {
          id
          username
          course
          articles {
            id
          }
          profile {
            id
            childImageSharp {
              fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
