import React from 'react'

import './footer.scss'

const footer = () => (
  <footer className="sr-fast load-hidden">
    <ul>
      <li><a href="#home"><i data-feather="home">Home</i></a></li>
      <li><a href="tel:+44 7507 481812" className="nav-link"><i data-feather="phone">Phone</i> <span className="d-none d-lg-inline">+44 7507 481812</span></a></li>
      <li><a href="mailto:hello@crafted.im" className="nav-link"><i data-feather="mail">Email</i> <span className="d-none d-lg-inline">hello@crafted.im</span></a></li>
      <li><a href="https://linkedin.com/in/davesayerfreelancer" className="nav-link"><i data-feather="linkedin">LinkedIn</i> <span className="d-none d-lg-inline">Dave Sayer</span></a></li>
      <li><a href="https://github.com/luxumbra" className="nav-link"><i data-feather="github">GitHub</i> <span className="d-none d-lg-inline">@luxumbra</span></a></li>
    </ul>
    {/* © {new Date().getFullYear()} */}
  </footer>
)

export default footer
