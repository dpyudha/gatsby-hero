import React from "react";
import PropTypes from "prop-types";

function Col({ children, lg, md, sm }) {
  let flex = (lg / 12) * 100;

  const styles = {
    flex: "0 0 " + flex + "%",
    maxWidth: flex + "%",
  };

  return <div style={styles}>{children}</div>;
}

Col.defaultProps = {
  lg: 12,
  md: 12,
  sm: 12,
};

Col.propTypes = {
  lg: PropTypes.number,
  md: PropTypes.number,
  sm: PropTypes.number,
};

export default Col;
