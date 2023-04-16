import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavbarContainer = styled.div`
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
export const NavbarLink = styled(Link)``
