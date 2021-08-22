import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


function Card({ align, children }) {
  const CardWrapper = styled.div`
    background: #fff;
    border-radius: 25px;
    padding: ${(props) => props.theme.spacings.large};
    text-align: ${align}
  `;

  return (<CardWrapper>{children}</CardWrapper>)
}

Card.defaultProps = {
  align: "center",
  justify: "center",
};

Card.propTypes = {
  align: PropTypes.string,
  justify: PropTypes.string,
};

export default Card;
