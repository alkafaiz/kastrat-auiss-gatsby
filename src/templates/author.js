import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"
import ArticleCard from "../components/article-card"
import style from "../styles/author.module.scss"

import DefaultProfile from "../components/default-profile"
import { Container } from "react-bootstrap"

export const query = graphql`
  query UserTemplate($id: Int!) {
    strapiUser(strapiId: { eq: $id }) {
      id
      username
      bio
      instagram
      linkedin
      twitter
      course
      profile {
        childImageSharp {
          fixed(width: 130, height: 130) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    allStrapiArticle(
      filter: { author: { id: { eq: $id } } }
      sort: { order: DESC, fields: published_date }
    ) {
      edges {
        node {
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
        }
      }
    }
  }
`

const SocialButton = ({ icon, url }) => (
  <a target="_blank" rel="noreferrer" href={url}>
    <div className={style.socialButton}>{icon}</div>
  </a>
)

const InstagramIcon = () => (
  <svg
    fill="#707070"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="18px"
    height="18px"
  >
    <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg
    fill="#707070"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="17px"
    height="17px"
  >
    <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" />
  </svg>
)

const TwitterIcon = () => (
  <svg
    fill="#707070"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="17px"
    height="17px"
  >
    <path d="M 24 4.300781 C 23.101563 4.699219 22.199219 5 21.199219 5.101563 C 22.199219 4.5 23 3.5 23.398438 2.398438 C 22.398438 3 21.398438 3.398438 20.300781 3.601563 C 19.300781 2.601563 18 2 16.601563 2 C 13.898438 2 11.699219 4.199219 11.699219 6.898438 C 11.699219 7.300781 11.699219 7.699219 11.800781 8 C 7.699219 7.800781 4.101563 5.898438 1.699219 2.898438 C 1.199219 3.601563 1 4.5 1 5.398438 C 1 7.101563 1.898438 8.601563 3.199219 9.5 C 2.398438 9.398438 1.601563 9.199219 1 8.898438 C 1 8.898438 1 8.898438 1 9 C 1 11.398438 2.699219 13.398438 4.898438 13.800781 C 4.5 13.898438 4.101563 14 3.601563 14 C 3.300781 14 3 14 2.699219 13.898438 C 3.300781 15.898438 5.101563 17.300781 7.300781 17.300781 C 5.601563 18.601563 3.5 19.398438 1.199219 19.398438 C 0.800781 19.398438 0.398438 19.398438 0 19.300781 C 2.199219 20.699219 4.800781 21.5 7.5 21.5 C 16.601563 21.5 21.5 14 21.5 7.5 C 21.5 7.300781 21.5 7.101563 21.5 6.898438 C 22.5 6.199219 23.300781 5.300781 24 4.300781" />
  </svg>
)

const AuthorTemplate = ({ data }) => {
  const {
    //articles,
    username,
    bio,
    course,
    profile,
    instagram,
    linkedin,
    twitter,
  } = data.strapiUser

  const articles = data.allStrapiArticle.edges

  console.log(data)
  return (
    <Layout>
      <SEO title={`${username}'s articles`} />
      <Container>
        <div className={style.profile}>
          <div className={style.contentPrimaryWrapper}>
            <div className={style.contentPrimary}>
              <h3>{username}</h3>
              <small>{course}</small>
              <ul className={style.social}>
                {instagram && (
                  <li>
                    <SocialButton icon={<InstagramIcon />} url={instagram} />
                  </li>
                )}
                {linkedin && (
                  <li>
                    <SocialButton icon={<LinkedinIcon />} url={linkedin} />
                  </li>
                )}
                {twitter && (
                  <li>
                    <SocialButton icon={<TwitterIcon />} url={twitter} />
                  </li>
                )}
              </ul>
            </div>
            <div className={style.profilePicture}>
              {profile ? (
                <Img fixed={profile.childImageSharp.fixed} />
              ) : (
                <DefaultProfile />
              )}
            </div>
          </div>
          <p>
            <span>{`About ${username.split(" ")[0]}`}</span>
            <br />
            {bio}
          </p>
        </div>
        <br />
        <hr />

        <h6>{`${articles.length} article${articles.length > 1 ? "s" : ""} by ${
          username.split(" ")[0]
        }`}</h6>
        <br />

        <ul className={style.articleContainer}>
          {articles.map(article => {
            const {
              id,
              title,
              excerpt,
              published_date,
              content,
              image,
            } = article.node
            return (
              <li key={id} style={{ listStyle: "none", margin: 0, padding: 0 }}>
                <ArticleCard
                  title={title}
                  image={image.childImageSharp.fixed}
                  published_date={published_date}
                  content={content}
                  excerpt={excerpt}
                  author={username}
                />
              </li>
            )
          })}
        </ul>
      </Container>
    </Layout>
  )
}

export default AuthorTemplate
