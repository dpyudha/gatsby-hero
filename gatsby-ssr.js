import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Theme from "./src/themes/theme"
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}

  *{
    box-sizing: border-box;
    padding:0;
    margin: 0;
  }

  html {
    font-size: 16px;
    font-family: ${props => props.theme.fonts.default}
  }

  h1 {
    ${props => props.theme.fonts.h1}
  }

  p {
    ${props => props.theme.fonts.p}
  }

  .text {
    &--white {
      color: #FFF;
    }

    &--center {
      text-align: center;
    }
  }

  b {
    font-weight: bold;
  }

  strong {
    font-weight: 600;
  }
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles/>
    {element}
  </ThemeProvider>
)