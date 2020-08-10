import React, { Fragment } from "react";
const spinner = () => (
  <Fragment>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
      alt="Loading..."
      style={SpinnerStyling}
    />
  </Fragment>
);
const SpinnerStyling = {
  width: "200px",
  margin: "auto",
  display: "block",
};
export default spinner;
