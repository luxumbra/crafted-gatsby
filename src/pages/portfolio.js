import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import ProjectSummary from '../components/projects/ProjectSummary'

const PortfolioPage = ({ data }) => (
  <Layout>
    <SEO title="Projects" description="Projects by Crafted" keywords={[`gatsby`, `application`, `react`]} />
    <section id="projects" className="intro">
      {data.allMarkdownRemark.edges.map(project => (
        <ProjectSummary  key={ project.node.id } project={project} />
      ))}
    </section>
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
            thumbnail
            uri
            role
            client
            technology
            highlights
          }
          excerpt(format: PLAIN)
        }
      }
    }
  }
`
export default PortfolioPage
