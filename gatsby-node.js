/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const util = require("./src/utils/general.util")

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    resolve(
      graphql(request).then(result => {
        if (result.error) reject(result.error)

        return result
      })
    )
  })

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const getArticles = makeRequest(
    graphql,
    `
    {
        articles: allStrapiArticle {
          edges {
            node {
              strapiId
              title
            }
          }
        }
      }
    `
  ).then(result => {
    const articles = result.data.articles.edges
    articles.forEach((article, index) => {
      createPage({
        path: `/${util.transformToSlug(article.node.title)}`,
        component: path.resolve("src/templates/article.js"),
        context: {
          id: article.node.strapiId,
        },
      })
    })
  })

  const getAuthors = makeRequest(
    graphql,
    `
  {
      allStrapiUser {
          edges {
              node {
                  id
                  username
              }
          }
      }
  }
  `
  ).then(result => {
    result.data.allStrapiUser.edges.forEach(({ node }) => {
      const slug = util.transformToSlug(node.username)

      createPage({
        path: `/author/${slug}`,
        component: path.resolve("src/templates/author.js"),
        context: {
          id: node.id,
        },
      })
    })
  })

  return Promise.all([getArticles, getAuthors])
}
