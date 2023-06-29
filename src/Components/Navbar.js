import React from 'react'
import Logo from './NavComponent/Logo'
import Search from './NavComponent/Search'
import More from './NavComponent/More'

function Navbar() {
  return (
    <div className='Navbar'>

      <div className='Logo'>
        <Logo />
      </div>

      <div className='Search'>
        <Search />
      </div>
      <div className='More'>
       <More />
      </div>
    </div>
  )
}

export default Navbar