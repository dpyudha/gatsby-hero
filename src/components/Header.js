import React from "react";
import styled from "styled-components";
import Image from "./Image";
import { ContainerWrapperMedium } from "../elements";

const Wrapper = styled.header`
  padding-top: 8.875rem;
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
`;

function Header({ children }) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src="Hero.png" alt="Hero image" />
      </ImageWrapper>
      <ContainerWrapperMedium>{children}</ContainerWrapperMedium>
    </Wrapper>
  );
}

export default Header;
