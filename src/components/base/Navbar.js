import React from "react";
import { Link } from "gatsby";
import { NavWrapper, ContainerWrapperLg } from "../../elements";
import Logo from "../../images/Logo.inline.svg";
import Display from "../Display";
import styled from "styled-components";

const Nav = styled.ul`
  display: flex;
  > li {
    &:not(:last-child) {
      margin-right: 3.3125rem;
    }
  }
  a {
    ${(props) => props.theme.fonts.p}
    text-decoration: none;
    color: #fff;
  }
`;

export const Navbar = () => {
  return (
    <NavWrapper>
      <ContainerWrapperLg>
        <Display align="center" justify="space-between">
          <Link to="/">
            <Logo />
          </Link>

          <Nav>
            <li>
              <Link to="/">USD</Link>
            </li>
            <li>
              <Link to="/">Help Center</Link>
            </li>
            <li>
              <Link to="/">1-800-891-2256</Link>
            </li>
          </Nav>
        </Display>
      </ContainerWrapperLg>
    </NavWrapper>
  );
};
