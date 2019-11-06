/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { StyleProvider } from "native-base";
import getTheme from "../../assets/native-base-theme/components";

import commonColor from "../../assets/native-base-theme/variables/commonColor";
import darkMode from "../../assets/native-base-theme/variables/darkMode";

export default class StyleWrapper extends Component {
  render() {
    return (
      <StyleProvider
        style={getTheme(this.props.theme ? darkMode : commonColor)}
      >
        {this.props.children ? this.props.children : null}
      </StyleProvider>
    );
  }
}
