import React from 'react'
import Link from 'gatsby-link'
import Layout from '../layouts/index'


import Header from '../components/Header';
import Section2 from '../components/Section-2'
import Section3 from '../components/Section-3'
import Section4 from '../components/Section-4'
import Section5 from '../components/Section-5'
import Section6 from '../components/Section-6'
import Section7 from '../components/Section-7'
import Footer from '../components/Footer'

require('../js/main');


const IndexPage = () => (
  <div>
    <Header />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
    <Footer />
  </div>
)

export default IndexPage
