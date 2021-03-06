import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import Page from '../components/Page'
import AboutMe from '../components/AboutMe'
import PostList from '../components/PostList'

import { rhythm } from '../utils/typography'

const Title = styled.h2`
  margin-top: ${rhythm(1.5)};
`

const HomePage = ({ data }) => {
  const {
    homepageTitle,
    description,
    heading,
    readMoreText,
  } = data.site.siteMetadata
  const { edges: posts, totalCount } = data.allMarkdownRemark

  return (
    <Page title={homepageTitle} description={description}>
      <AboutMe />
      <Title>{heading}</Title>
      <PostList
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
        homepageTitle
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
            title
            date
            humanDate: date(formatString: "MMMM DD, YYYY")
            description
          }
        }
      }
    }
  }
`
