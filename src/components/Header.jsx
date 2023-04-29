import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Navigation = styled.nav`
  display: flex;
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 1rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Infinite-fav!</Logo>
      <Navigation>
        <NavItem href="#">Favorites</NavItem>
        <NavItem href="#">Profile</NavItem>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
