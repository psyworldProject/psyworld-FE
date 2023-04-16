import React from 'react'
import { NavbarContainer, NavbarLink } from './style'
import { Pencil, EmojiSmile, Image, House, JournalText } from 'react-bootstrap-icons'

function Navbar() {
  return (
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
  )
}

export default Navbar
