import React from "react"
import { graphql } from "gatsby"

import Page from "../components/Page"
import AboutMe from "../components/AboutMe"
import PostList from "../components/PostList"

const HomePage = ({ data }) => {
  const { title, description, heading, readMoreText } = data.site.siteMetadata
  const { edges: posts, totalCount } = data.allMarkdownRemark

  return (
    <Page title={title} description={description}>
      <AboutMe />
      <PostList
        title={heading}
        posts={posts}
        readMoreText={totalCount > posts.length ? readMoreText : undefined}
      />
    </Page>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        heading
        readMoreText
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
