import React from 'react'
import { Link } from 'gatsby'

import './ProjectSummary.scss'

const ProjectSummary = ({ project }) => {
  return (
    <div key={project.node.id} className="project-summary">
      {/* <img src="./img/cyn-screen.jpg" alt="" class="project-thumb" /> */}
      <h3><Link to={ project.node.frontmatter.uri }>{ project.node.frontmatter.title }</Link></h3>
      { project.node.excerpt }
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
