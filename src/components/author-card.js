import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Link } from "gatsby"

import { transformToSlug } from "../utils/general.util"
import style from "../styles/author-card.module.scss"

const ArticleCard = ({ author, profile, totalArticle, course }) => {
  return (
    <div className={style.card}>
      <Link to={`/author/${transformToSlug(author)}`}>
        <Img fixed={profile} />
        <div className={style.content}>
          <h2>{author}</h2>
          <p>{course}</p>

          <div className={style.footer}>
            <p className={style.totalArticle}>
              {`${totalArticle} article${totalArticle > 1 ? "s" : ""}`}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
ArticleCard.propTypes = {
  author: PropTypes.string,
  profile: PropTypes.object,
  totalArticle: PropTypes.number,
  course: PropTypes.string,
}

ArticleCard.defaultProps = {
  author: ``,
  profile: {},
  totalArticle: 1,
  course: ``,
}

export default ArticleCard
