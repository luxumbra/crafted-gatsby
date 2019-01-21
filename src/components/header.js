import React from 'react'
// import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Navi from './navi'

import './header.scss'

const Header = ({ siteBrand }) => (
  // <header>
    <Navi brandName={ siteBrand } />
  // </header>
)

Header.propTypes = {
  siteBrand: PropTypes.string,
}

Header.defaultProps = {
  siteBrand: ``,
}

export default Header
