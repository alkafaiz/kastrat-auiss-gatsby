import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Moment from "react-moment"
import { Link } from "gatsby"
import readTimeEstimate from "read-time-estimate"

import { transformToSlug } from "../utils/general.util"
import style from "../styles/article-author-card.module.scss"

const ArticleAuthorCard = ({
  title,
  image,
  excerpt,
  published_date,
  content,
}) => {
  const { duration } = readTimeEstimate(content, 275, 12, 500, ["img", "Image"])

  let readDurationInMinute = Math.round(duration)

  if (readDurationInMinute === 0) readDurationInMinute += 1

  return (
    <div className={style.card}>
      <Link to={`/${transformToSlug(title)}`}>
        <Img fixed={image} />
        <div className={style.content}>
          <h2>{title}</h2>
          <p>{excerpt}</p>

          <div className={style.footer}>
            <p className={style.moment}>
              <Moment format="MMM D">{published_date}</Moment> &bull;{" "}
              {readDurationInMinute} min read
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
ArticleAuthorCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
  excerpt: PropTypes.string,
  content: PropTypes.string,
}

ArticleAuthorCard.defaultProps = {
  title: ``,
  image: ``,
  excerpt: ``,
  content: ``,
}

export default ArticleAuthorCard
