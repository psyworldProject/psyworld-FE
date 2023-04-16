import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import { Wrapper } from './style'

function Layout() {
  return (
    <Wrapper>
      <Outlet />
      <Navbar />
    </Wrapper>
  )
}

export default Layout
