import React from "react";
import { DisplayFlex } from "../elements";
import PropTypes from "prop-types";


function Display({align, justify, children}) {
  return(
    <DisplayFlex
      style={{
        alignItems: align,
        justifyContent: justify
      }}
    >{children}</DisplayFlex>
  )
}


Display.defaultProps = {
  align: 'center',
  justify: 'center'
}

Display.propTypes = {
  align: PropTypes.string,
  justify: PropTypes.string
}

export default Display;
