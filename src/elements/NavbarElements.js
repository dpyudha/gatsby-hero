import styled from "styled-components"

export const NavWrapper  = styled.nav`
  background-color: transparent;
  padding: ${props => props.theme.spacings.large} 0;
  position: absolute;
  top: 0;
  width: 100%;
  left:0;
  z-index:10;
`