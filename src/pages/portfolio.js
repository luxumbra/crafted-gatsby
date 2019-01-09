import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const PortfolioPage = ({ data }) => (
  <Layout>
    <SEO title="Portfolio" description="Projects by Crafted" keywords={[`gatsby`, `application`, `react`]} />

    {data.allMarkdownRemark.edges.map(project => (
      <div key={ project.node.id }>
        <img src="./img/cyn-screen.jpg" alt="" class="project-thumb" />
        <h3><Link to={ project.node.frontmatter.uri }>{ project.node.frontmatter.title }</Link></h3>
        { project.node.excerpt }
        <ul>
          <li><i data-feather="user"></i> <span>Role in project: { project.node.frontmatter.role }</span></li>
          <li><i data-feather="package"></i> <span>Technology used: { project.node.frontmatter.technology }</span></li>
          <li><i data-feather="star"></i> <span>Highlights: { project.node.frontmatter.highlights }</span></li>
          <li><i data-feather="at-sign"></i> <span>Client/Employer: { project.node.frontmatter.client }</span></li>
        </ul>
      </div>
    ))}
    {/* <div class="col col-12 col-md-6">
      <img src="./img/cyn-screen.jpg" alt="" class="project-thumb" />
      <h3><a href="http://cyclingnews.com">cyclingnews.com</a></h3>
      <p>A complete rebuild and content migration of the largest cycling news website in the world. Rebuilt from the ground up.</p>
      <ul>
        <li><i data-feather="user"></i> <span>Role in project: Senior Front-end developer</span></li>
        <li><i data-feather="package"></i> <span>Technology used: HTML, CSS, CakePHP</span></li>
        <li><i data-feather="star"></i> <span>Highlights: Being deeply involved in a very large, big budget project through all stages of the project lifecycle.</span></li>
        <li><i data-feather="at-sign"></i> <span>Client/Employer: Future Plc</span></li>
      </ul>
    </div>
    <div class="col col-12 col-md-6">
      <img src="./img/brd-screen.jpg" alt="" class="project-thumb" />
      <h3><a href="http://musicradar.com">musicradar.com</a></h3>
      <p>A complete build from scratch of Future Plc music related website MusicRadar.</p>
      <ul>
        <li><i data-feather="user"></i> <span>Role in project: Senior Front-end developer</span></li>
        <li><i data-feather="package"></i> <span>Technology used: HTML, CSS, CakePHP</span></li>
        <li><i data-feather="star"></i> <span>Highlights: Being deeply involved in a big project through all stages of the project lifecycle.</span></li>
        <li><i data-feather="at-sign"></i> <span>Client/Employer: Future Plc</span></li>
      </ul>
    </div>
    <div class="col col-12 col-md-3">
      <img src="./img/ww-screen.jpg" alt="" class="project-thumb"/>
      <h3><a href="https://wildwoodhouseandgarden.co.uk">WildWood House and Garden</a></h3>
      <p>100% design, coding and DevOps handled by myself. A static site built with the Foundation framework using <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>SASS</strong>, <strong>Gulp</strong>, <strong>Hugo</strong> and <strong>DatoCMS</strong>. The site is hosted on Netlify, employing a <strong>continuous deployment</strong> set-up with <strong>GitHub</strong> & <strong>Netlify</strong>.</p>
      <ul>
        <li><i data-feather="user"></i> <span>Role in project: 100% concept, design, development and DevOps.</span></li>
        <li><i data-feather="package"></i> <span>Technology used: HTML, CSS3, SCSS, Gulp, Hugo, DatoCMS, Netlify, jQuery, Foundation 5</span></li>
        <li><i data-feather="star"></i> <span>Highlights: Being my first static site, I fell in love with the technology behind it.</span></li>
        <li><i data-feather="at-sign"></i> <span>Client/Employer: Crafted</span></li>
      </ul>
    </div>
    <div class="col col-12 col-md-3">
      <img src="./img/sns-screen.jpg" alt="" class="project-thumb"/>
      <h3><a href="https://snscms.crafted.im/">Sticks and Stones</a> <span class="beta">Beta</span></h3>
      <p>100% concept, design, development and DevOps handled by me. A static site built with the Foundation framework using <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>SASS</strong>, <strong>Gulp</strong>, <strong>Hugo</strong>, <strong>NetlifyCMS</strong> and <strong>SnipCart</strong>. The site is hosted on Netlify, employing <strong>continuous deployment</strong> set up with <strong>GitHub</strong> & <strong>Netlify</strong>.</p>
      <ul>
        <li><i data-feather="user"></i> <span>Role in project: 100% concept, design, development and DevOps.</span></li>
        <li><i data-feather="package"></i> <span>Technology used: HTML, CSS3, SCSS, Gulp, Hugo, NetlifyCMS, Netlify, SnipCart, jQuery, Foundation 6</span></li>
        <li><i data-feather="star"></i> <span>Highlights: Working with NetlifyCMS and SnipCart integration - both very enjoyable and well thought out.</span></li>
        <li><i data-feather="at-sign"></i> <span>Client/Employer: Crafted</span></li>
      </ul>
    </div>
    <div class="col col-12 col-md-3">
      <img src="./img/archaeoapp.jpg" alt="" class="project-thumb"/>
      <h3><a href="https://archaeoapp.crafted.im">ArchaeoApp</a> <span class="beta">Dev</span></h3>
      <p>100% concept, design, development and DevOps handled by myself. Currently in development, this is a <acronym title="Single Page App">SPA</acronym> (single page app) being built with <strong>React</strong>, <strong>Redux</strong>, <strong>Bootstrap</strong> and <strong>Firebase</strong>. The site is currently hosted with Firebase Hosting.</p>
      <ul class="d-flex flex-column">
        <li><i data-feather="user"></i> <span>Role in project: 100% concept, design, development and DevOps.</span></li>
        <li><i data-feather="package"></i> <span>Technology used: React, HTML, CSS3, SCSS, Bootstrap, Webpack, Netlify</span></li>
        <li><i data-feather="star"></i> <span>Highlights: Working with React.</span></li>
        <li><i data-feather="at-sign"></i> <span>Client/Employer: Crafted</span></li>
      </ul>
    </div> */}
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
