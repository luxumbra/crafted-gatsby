import React from 'react'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="Crafted starter" keywords={[`gatsby`, `application`, `react`]} />
    <section id="home">
      <div className="row intro pb-md-3 pb-lg-3 pb-0">
        <div className="col col-12">
            <img className="logo" src="./img/logo.png" alt="Crafted logo" />
        </div>
        </div>
        <div className="row intro pb-2 pb-md-3">
            <div className="col col-12">
                {/* <!-- <h1 className="display-1">crafted</h1> --> */}
                <span id="typed" className="lead typed typed-fade-out"></span>
                {/* <!-- <p>Hand crafted websites made in the Isle of Man</p> --> */}
            </div>
        </div>

        <div className="row precis p-3 pt-4 p-md-5">
            <div className="col-12 col-md-12">
                <blockquote cite="https://www.linkedin.com/in/stefankruger">
                    Dave was a rock - dependable, self-motivated and crucially a calm and patient mentor for less experienced team members. Dave has a passion and pride in doing the right thing, and not just what is expedient and this had a real impact on the quality of the products we were building.
                    <footer>
                        - <cite>Stefan Kruger, Dev team manager @ Future Publishing</cite>
                    </footer>
                    {/* <p>It's not about making something that meets expectations. <br>
                    It's about <em>making</em> something that <em>changes</em> them.</p>
                    <footer>
                        - <cite>Todd Carmichael</cite>
                    </footer> */}
                </blockquote>
            </div>
        </div>
        {/* <div className="row p-2 next-section">
            <div className="col col-12">
                <a data-scroll href="#about" className="btn primary-btn pulse" title="More arrow" aria-hidden="true"><span className=""></span></a>
            </div>
        </div> */}
    </section>
  </Layout>
)

export default IndexPage
