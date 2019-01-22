import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

const AboutPage = () => (
    <Layout>
        <SEO title="About me" description="Crafted starter" keywords={[`gatsby`, `application`, `react`]} />
        <section id="about" className="sr-slow load-hidden">
            <div className="intro">
                <img src="/img/me.jpg" alt="" className="avatar" />
                <h2>Who am I?</h2>
                <p>A Front-end developer since 2002. I have worked in agency and corporate environments on a freelance, contract and permanent basis throughout my career and worked as senior front-end developer on a number of high profile websites (CakePHP) from concept through to launch. I use modern HTML, CSS, JavaScript and their related tools to develop fast, responsive and robust websites, meeting business requirements and current web standards.</p>
                <p>I use HTML5, CSS3, SCSS, JavaScript, React, Gatsby, Hugo, NetlifyCMS and SnipCart and also handle the DevOps and DNS side of things on freelance projects. I am also an aspiring designer but my career aspirations are to be a senior full-stack developer.</p>
                <p>I'm passionate about this industry, I love my work and am excited by the technology we have at our disposal.</p>
            </div>
        </section>
    </Layout>
)

export default AboutPage
