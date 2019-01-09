import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Nav from './nav'

import './header.scss'

const Header = ({ siteBrand }) => (
  <header>
    <Nav brandName={ siteBrand } />
  </header>
)

Header.propTypes = {
  siteBrand: PropTypes.string,
}

Header.defaultProps = {
  siteBrand: ``,
}

export default Header
