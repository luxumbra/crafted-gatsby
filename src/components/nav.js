import React from 'react'
import { Link } from 'gatsby'

import './nav.scss'

const Nav = ({ brandName }) => (

    <nav id="nav" className="navbar fixed-top navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">{ brandName }</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
            <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/">Home</Link>
                <Link className="nav-item nav-link" to="/about">About</Link>
                {/* <a className="nav-item nav-link" to="/services">Services</a> */}
                <Link className="nav-item nav-link" to="/portfolio">Portfolio</Link>
            </div>
        </div>
    </nav>
)

export default Nav
