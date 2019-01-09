import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const AboutPage = () => (
    <Layout>
        <SEO title="Home" description="Crafted starter" keywords={[`gatsby`, `application`, `react`]} />
        <h2>About me</h2>
        <p>Some text here</p>
    </Layout>
)

export default AboutPage
