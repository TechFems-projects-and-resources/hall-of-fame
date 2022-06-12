import React from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

const colors = {
  primary: "#00A6A6"
};

export const themeStyles = {
  colors
};

function Theme({ children }) {
  return <ThemeProvider theme={themeStyles}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.node.isRequired
};

export default Theme;
