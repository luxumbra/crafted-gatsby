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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/img/uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/projects`,
        name: `projects`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            }
          }
        ],
      },
    },
    `gatsby-plugin-catch-links`,
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
        name: "Crafted",
        short_name: "Crafted",
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
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`,
  ],
}
