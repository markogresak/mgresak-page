require('dotenv').config()

const siteUrl = `https://gresak.io/`

module.exports = {
  siteMetadata: {
    title: `OutOfMemory Blog`,
    author: `Marko Grešak`,
    homepageTitle: `Marko Grešak`,
    blogTitle: `OutOfMemory Blog`,
    description: `Marko Grešak. Web developer who is striving to improve in all areas. Loving all JavaScript and React related things! Writer of OutOfMemory blog.`,
    heading: `My latest blog posts`,
    fullDescription: [
      `<em>Web Developer</em>, striving to improve in all areas`,
      `Loving all JavaScript and React related things!`,
    ],
    readMoreText: `Read older posts`,
    siteUrl,
    newIssueUrl: `https://github.com/markogresak/markogresak.github.io/issues/new`,
    discussUrl: `https://mobile.twitter.com/search?q=${encodeURIComponent(
      siteUrl,
    )}`,
    links: {
      title: `Links`,
      items: [
        {
          title: `Github`,
          href: `https://github.com/markogresak`,
          icon: `github`,
          iconColor: `var(--gh)`,
        },
        {
          title: `Stack Overflow`,
          href: `http://stackoverflow.com/users/1276128/marko-gre%C5%A1ak`,
          icon: `stack-overflow`,
          iconColor: `#e6853d`,
        },
        {
          title: `Twitter`,
          href: `https://twitter.com/markogresak`,
          icon: `twitter`,
          iconColor: `#55acee`,
        },
      ],
    },
    site_404: {
      title: `Oops, Not Found`,
      links: [
        {
          title: `Home`,
          href: `/`,
        },
        {
          title: `Blog`,
          href: `/blog`,
        },
      ],
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 663,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-external-links`,
          `gatsby-plugin-catch-links`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Marko Grešak`,
        short_name: `gresak.io`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3c00e0`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
        },
        // Refetch once per day
        refetchInterval: 24 * 60 * 60,
      },
    },
  ],
}
