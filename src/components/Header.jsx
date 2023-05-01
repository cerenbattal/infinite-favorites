import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px;
`;

const Logo = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 24px;
  margin-left: 1rem;
  text-decoration: none;
  color: white;
`;

const Navigation = styled.nav`
  display: flex;
`;

const NavItem = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 1rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to={'/'} style={{ textDecoration: 'none' }}>
        <Logo>Infinite-fav!</Logo>
      </NavLink>
      <Navigation>
        <NavLink to={'/profile'} style={{ textDecoration: 'none' }}>
          <NavItem>Profile</NavItem>
        </NavLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
