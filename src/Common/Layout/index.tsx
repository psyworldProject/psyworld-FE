import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

function Layout() {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  )
}

export default Layout
