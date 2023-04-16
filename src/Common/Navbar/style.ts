import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavbarContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
`
export const NavbarLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  background-color: white;
  color: #4a4a4a;
  svg {
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
  }
  span {
    font-size: 12px;
  }
  &.home {
    height: 100px;
    align-self: flex-end;
    border-radius: 24px 24px 0 0;
    svg {
      width: 40px;
      height: 40px;
    }
  }
  &.active {
    color: #dd8263;
  }
`
