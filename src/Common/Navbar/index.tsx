import React from 'react'
import { NavbarContainer, NavbarLink } from './style'
import { Book, EmojiSmile, Image, House, JournalText } from 'react-bootstrap-icons'

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarLink to='/psylife'>
        <EmojiSmile />
        <span>싸이생활</span>
      </NavbarLink>
      <NavbarLink to='/diary'>
        <Book />
        <span>다이어리</span>
      </NavbarLink>
      <NavbarLink className='home' to='/'>
        <House />
        <span>미니홈피</span>
      </NavbarLink>
      <NavbarLink to='/photobook'>
        <Image />
        <span>사진첩</span>
      </NavbarLink>
      <NavbarLink to='/guestbook'>
        <JournalText />
        <span>방명록</span>
      </NavbarLink>
    </NavbarContainer>
  )
}

export default Navbar
