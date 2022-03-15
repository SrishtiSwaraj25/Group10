module.exports = {
<<<<<<< HEAD
  
  plugins: [`gatsby-plugin-sass`,
  `gatsby-plugin-image`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/images`,
      name: `images`,
    },
  },
],
=======
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
  ],
>>>>>>> 498a421cb9c1877cca804a18da61e51b8b788602
}
