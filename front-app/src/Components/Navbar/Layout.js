import React from 'react'
import NavScrollExample from './Navbar'
import {Outlet} from 'react-router-dom'
function Layout() {
  return (
    <div>
        <NavScrollExample/>
        <Outlet/>
    </div>
  )
}

export default Layout