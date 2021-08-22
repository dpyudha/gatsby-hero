import React from "react";
import styled from "styled-components";

const ButtonEl = styled.button`
  padding: 1.125rem 1.5625rem;
  border: none;
  font-size: 13px;
  line-height: 19px;
  width: 100%;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
`;

const defaultStyles = {
  backgroundColor: "#1F1D2B",
  color: "#FFF",
};

const primaryStyles = {
  backgroundColor: "#00B187",
  color: "#FFF",
};

const warningStyles = {
  backgroundColor: "#FFB800",
  color: "#FFF",
};

const Button = ({ children, onClick, disabled, type = "primary" }) => {
  let styles = {};

  switch (type) {
    case "primary":
      styles = primaryStyles;
      break;

    case "warning":
      styles = warningStyles;
      break;

    default:
      styles = defaultStyles;
      break;
  }

  return (
    <ButtonEl style={styles} onClick={onClick}>
      {children || "label"}
    </ButtonEl>
  );
};

export default Button;
