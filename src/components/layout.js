import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
// import Helmet from 'react-helmet'
// import PageTransition from 'gatsby-plugin-page-transitions';

import Header from './header'
import Footer from './footer'

import ScrollReveal from 'scrollreveal'
import feather from 'feather-icons'
import Typed from 'typed.js'

import './layout.scss'
import './style/theme.scss'

class Layout extends Component {

  componentDidMount () {

    /* typed effect */
    const typedEl = document.getElementById('typed')

    const typedOptions = {
      strings: [
          "Web development^1000",
          "Web design^1000",
          "Ecommerce ^1000",
          "Hand crafted websites^700 made in the Isle of Man^400."],
      typeSpeed: 50,
      backDelay: 200,
      fadeOut: false,
      loop: false,
      loopCount: Infinity
    }
    if(typedEl){
      const typed = new Typed('#typed', typedOptions)
    }

    // var scroll = new SmoothScroll('a[href*="#"]', {
    //   easing: 'easeInOutQuad',
    //   updateURL: true,
    //   popstate: true,
    //   speed: 1000
    // });

    feather.replace();

    const srRevealSlooooow = {
      delay: 1500,
      duration: 1000,
      reset: true,
      mobile: true
    }
    const srRevealSlooow = {
      delay: 700,
      duration: 700,
      reset: true,
      mobile: true
    }
    const srRevealSlow = {
      delay: 400,
      duration: 700,
      reset: true,
      mobile: true
    }
    const srRevealFast = {
      delay: 400,
      duration: 400,
      reset: true,
      mobile: true
    }
    ScrollReveal().reveal(".project-summary", srRevealSlow);
    ScrollReveal().reveal("#projects", srRevealFast);
    ScrollReveal().reveal("#home", srRevealSlooow);
    ScrollReveal().reveal("#content + footer", srRevealSlooooow);

    const content = document.getElementById('content');

    const navbar = document.getElementById('nav');
    const sticky = content.offsetTop;
    // console.log(sticky)

    function navbarSticky() {
      if(window.pageYOffset > sticky + 100) {
          navbar.classList.add('sticky');
      } else {
          navbar.classList.remove('sticky');
      }
    }
    if(typeof window !== `undefined`) {
      window.onscroll = () => navbarSticky();
    }
  }
  render() {
    return (
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
          <Header siteBrand={ data.site.siteMetadata.brand } />
          <div id="content" className="wrapper grid">
            {this.props.children}
          </div>
          <Footer />
          {/* </PageTransition> */}
        </>
      )}/>
    )
  }
}

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             brand
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         {/* <PageTransition> */}
//         <Header siteBrand={ data.site.siteMetadata.brand } />
//         <div id="content" className="wrapper grid">
//           {children}
//         </div>
//         <Footer />
//         {/* </PageTransition> */}

//         <script src="/js/behaviour.js" defer></script>
//       </>
//     )}
//   />

// )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
