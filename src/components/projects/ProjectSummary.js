import React from 'react'
import { Link } from 'gatsby'

import './ProjectSummary.scss'

const ProjectSummary = ({ project }) => {
  return (
    <div className="project-summary">
    { console.log(project.node.excerpt) }
      {/* <img src="./img/cyn-screen.jpg" alt="" class="project-thumb" /> */}
      <h3><Link to={ project.node.frontmatter.uri }>{ project.node.frontmatter.title }</Link></h3>
      <p>{project.node.excerpt}</p>
      <ul>
        <li><i data-feather="user"></i> <span>Role in project: { project.node.frontmatter.role }</span></li>
        <li><i data-feather="package"></i> <span>Technology used: { project.node.frontmatter.technology }</span></li>
        <li><i data-feather="star"></i> <span>Highlights: { project.node.frontmatter.highlights }</span></li>
        <li><i data-feather="at-sign"></i> <span>Client/Employer: { project.node.frontmatter.client }</span></li>
      </ul>
    </div>
  )
}

export default ProjectSummary
