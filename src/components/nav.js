import React from 'react'
import { Link } from 'gatsby'

import './nav.scss'

const Nav = ({ brandName }) => (
    <nav>
        <div className="brand">
            <Link className="navbar-brand" to="/">{ brandName }</Link>
        </div>
        <div className="site-nav">
            <div className="nav-items">
                <Link className="nav-item nav-link" to="/">Home</Link>
                <Link className="nav-item nav-link" to="/about">About</Link>
                {/* <a className="nav-item nav-link" to="/services">Services</a> */}
                <Link className="nav-item nav-link" to="/portfolio">Portfolio</Link>
            </div>
        </div>
    </nav>
)

export default Nav
