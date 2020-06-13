import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Link } from "gatsby"

import { transformToSlug } from "../utils/general.util"
import style from "../styles/author-card.module.scss"

const ArticleCard = ({ author, profile, totalArticle, course }) => {
  return (
    <Link className={style.card} to={`/author/${transformToSlug(author)}`}>
      <div className={style.profile}>
        <Img fluid={profile} />
      </div>
      <div className={style.content}>
        <h6>{author}</h6>
        <p>{course}</p>

        <div className={style.footer}>
          <p className={style.totalArticle}>
            {`${totalArticle} article${totalArticle > 1 ? "s" : ""}`}
          </p>
        </div>
      </div>
    </Link>
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
