import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 50px;
`;

const NavbarLink = styled(Link)``;
function Layout() {
  return (
    <>
      <Outlet />
      <NavbarContainer>
        <NavbarLink to="/psylife">psylife</NavbarLink>
        <NavbarLink to="/dairy">dairy</NavbarLink>
        <NavbarLink to="/">minihome</NavbarLink>
        <NavbarLink to="/photobook">photobook</NavbarLink>
        <NavbarLink to="/guestbook">guestbook</NavbarLink>
      </NavbarContainer>
    </>
  );
}

export default Layout;
