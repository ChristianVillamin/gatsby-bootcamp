import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  const blogs = data.allMarkdownRemark.edges.map((edge, i) => {
    return (
      <li key={`${edge}${i}`}>
        <h2>{edge.node.frontmatter.title}</h2>
        <p>{edge.node.frontmatter.date}</p>
      </li>
    )
  })

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show up here later on.</p>
      <ol>{blogs}</ol>
    </Layout>
  )
}

export default BlogPage
