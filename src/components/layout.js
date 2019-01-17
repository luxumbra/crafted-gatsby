import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
// import PageTransition from 'gatsby-plugin-page-transitions';

import Header from './header'
import Footer from './footer'

import './layout.scss'
import './style/theme.scss'

const feather = require('feather-icons')

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
          { feather.replace() }
        </Helmet>
        <Header siteBrand={ data.site.siteMetadata.brand } />
        <div id="content" className="wrapper grid">
          {children}
        </div>
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
