module.exports = {
  siteMetadata: {
    brand: `Crafted`,
    title: `Crash course in Gatsby`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@craftediom`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
    },
    // {
    //   resolve: `gatsby-plugin-page-transitions`,
    //   options: {
    //     transitionTime: 500,
    //     // defaultStyle: {
    //     //   transition: 'left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
    //     //   left: '100%',
    //     //   position: 'absolute',
    //     //   width: '100%',
    //     // },
    //     // transitionStyles:{
    //     //   entering: { left: '0%' },
    //     //   entered: { left: '0%' },
    //     //   exiting: { left: '100%' },
    //     // }
    //   }
    // },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Roboto:100`, `Roboto Slab:100`, `Assistant:200`]
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-netlify`,
  ],
}
