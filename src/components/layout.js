import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
// import PageTransition from 'gatsby-plugin-page-transitions';

import Header from './header'
import Footer from './footer'

import './layout.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            brand
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/* <PageTransition> */}
        <Helmet>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Helmet>
        <Header siteBrand={ data.site.siteMetadata.brand } />
        <article>
          {children}
        </article>
        <Footer />
        {/* </PageTransition> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
