import React from 'react'
import Link from 'gatsby-link'
// import Layout from '../layouts/index'


import Header from '../components/header';
import FutureImageRight from '../components/future_image_right'
import FutureImageIeft from '../components/future_image_left'
import TallCenteredFuture from '../components/tall_centered_future'
import FutureImageRightSecond from '../components/future_image_right_second'
import FutureLayers from '../components/future_layers'
import Contact from '../components/contact'
// import Footer from '../components/Footer'

// require('../js/main');


const IndexPage = () => (
  <div>
    {/* <Header /> */}
    <FutureImageRight />
    <FutureImageIeft />
    <TallCenteredFuture />
    <FutureImageRightSecond />
    <FutureLayers />
    <Contact />
    {/* <Footer /> */}
  </div>
)

export default IndexPage
