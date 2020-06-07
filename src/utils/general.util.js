exports.transformToSlug = (rawString = "Some Name") => {
  let slug = rawString.replace(/[^\w\s]/gi, "")
  slug = rawString.toLowerCase().replace(/[^a-zA-Z0-9 ]+/g, "")
  slug = slug.replace(/\s+/g, "-")

  return slug
}
