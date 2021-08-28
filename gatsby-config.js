require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Chris Vanderloo`,
    // Default title of the page
    siteTitleAlt: `Chris Vanderloo - Personal Site`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Chris Vanderloo - Personal Site`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://chrisvanderloo.com`,
    // Used for SEO
    siteDescription: `Chris Vanderloo's personal portfolio website and blog.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Twitter Handle
    author: `@chris_vanderloo`,
    siteImage: `/dev/null`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Resume`,
            slug: `/resume`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/chris_vanderloo`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/chrisvanderloo/`,
          },
          {
            name: `GitHub`,
            url: `https://github.com/chrisvander/`,
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GOOGLE_ANALYTICS_ID,
    //   },
    // },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#aaa`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icon: `static/cv-icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["iA Quattro"],
          urls: ["/variable-fonts.css"],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};