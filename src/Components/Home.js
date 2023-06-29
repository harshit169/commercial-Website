import React from 'react'
import Navbar from './Navbar'
import Catgories from './Categories'
import Slider from './Slider'
import Offers from './Offers'
import Grocery from './Grocery'
import Mobile from './Mobile'
import Fashion from './Fashion'
import Electronics from './Electronics'
import Footer from './Footer'
function Home() {
  return (
    <div className='Home'>
      <Navbar />
      <Catgories />
      <Slider/>
      <Offers />
      <Grocery />
      <Mobile />
      <Fashion />
      <Electronics />
      <Footer />
    </div>
  )
}

export default Home