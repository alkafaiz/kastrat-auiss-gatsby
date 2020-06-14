import React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AuthorCard from "../components/author-card"
import classes from "../styles/author-page.module.scss"

export default function Author({ data }) {
  return (
    <Layout>
      <SEO title="Authors" description="some descriptions" />
      <Container>
        <h5>Meet all authors</h5>
        <br />
        <div className={classes.authorContainer}>
          {data.allStrapiUser.edges.map(({ node }) => {
            const { id, username, articles, profile, course } = node
            return (
              <AuthorCard
                key={id}
                author={username}
                profile={profile.childImageSharp.fluid}
                totalArticle={articles.length}
                course={course}
              />
            )
          })}
        </div>
      </Container>
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
              fluid(maxWidth: 100, maxHeight: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
