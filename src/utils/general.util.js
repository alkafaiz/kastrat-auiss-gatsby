exports.transformToSlug = (rawString = "Some Name") => {
  let slug = rawString.replace(/[^\w\s]/gi, "")
  slug = rawString.toLowerCase().replace(/[^a-zA-Z0-9 ]+/g, "")
  slug = slug.replace(/\s+/g, "-")

  return slug
}

exports.longStringHelper = str => {
  const sliceBoundary = str => str.substr(0, str.lastIndexOf(" "))
  const truncate = (n, useWordBoundary) =>
    str.length <= n
      ? str
      : `${
          useWordBoundary
            ? sliceBoundary(str.slice(0, n - 1))
            : str.substr(0, n - 1)
        }…`
  return { full: str, truncate }
}
