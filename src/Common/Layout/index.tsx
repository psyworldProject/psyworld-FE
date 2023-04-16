import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Pencil, EmojiSmile, Image, House, JournalText } from 'react-bootstrap-icons'

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 50px;
  svg {
    width: 30px;
    height: 30px;
  }
`

const NavbarLink = styled(Link)``
function Layout() {
  return (
    <>
      <Outlet />
      <NavbarContainer>
        <NavbarLink to='/psylife'>
          <EmojiSmile />
        </NavbarLink>
        <NavbarLink to='/diary'>
          <JournalText />
        </NavbarLink>
        <NavbarLink to='/'>
          <House />
        </NavbarLink>
        <NavbarLink to='/photobook'>
          <Image />
        </NavbarLink>
        <NavbarLink to='/guestbook'>
          <Pencil />
        </NavbarLink>
      </NavbarContainer>
    </>
  )
}

export default Layout
