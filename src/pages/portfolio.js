import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import ProjectSummary from '../components/projects/ProjectSummary'

const PortfolioPage = ({ data }) => (
  <Layout>
    <SEO title="Portfolio" description="Projects by Crafted" keywords={[`gatsby`, `application`, `react`]} />

    {data.allMarkdownRemark.edges.map(project => (
      <ProjectSummary project={project} />
    ))}
  </Layout>
)

export const projectsQuery = graphql`
  query ProjectsIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            date
            title
            uri
            role
            client
            technology
            highlights
          }
        }
      }
    }
  }
`
export default PortfolioPage
