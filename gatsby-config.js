module.exports = {
  siteMetadata: {
    title: `Kastrat AUISS`,
    description: `Articles published by Strategic Research Department of Asia Pacific University Indonesian Student Society.`,
    author: `@alkafaiz`,
    keywords: ["kastrat", "APU", "AUISS", "Asia Pacific University"],
    siteUrl: "https://kastrat-auiss.netlify.app",
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? `https://kastrat-auiss-staging.herokuapp.com`
          : `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`article`, `user`],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kastrat Auiss`,
        short_name: `Kastrat Auiss`,
        start_url: `/`,
        background_color: `#8b2e2e`,
        theme_color: `#8b2e2e`,
        display: `minimal-ui`,
        icon: `src/images/auiss-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Poppins"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    }, // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
