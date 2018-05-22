import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// import Header from '../components/header'
// import Section2 from '../components/section-2'
// import Section3 from '../components/section-3'
// import Section4 from '../components/section-4'
// import Section5 from '../components/section-5'
// import Section6 from '../components/section-6'
// import Footer from '../components/footer'


import './index.css'

const Layout = ({children}) => (
  <div>
    {/* <Header />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Footer /> */}
    
    {children()}

  </div>
)


export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`