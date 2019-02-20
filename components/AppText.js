import React from "react";
import { Text } from "react-native";
import { isArray } from "lodash";

export default class HeadingText extends React.Component {
  render() {
    const { bold, italic, semibold, style } = this.props;

    let fontFamily = "proxima-nova";

    if (semibold) {
      fontFamily = "proxima-nova-semibold";
    }

    if (bold) {
      fontFamily = "proxima-nova-bold";
    }

    if (italic) {
      fontFamily = "proxima-nova-italic";
    }

    const appStyle = {
      color: "rgba(0, 0, 0, .84)",
      fontFamily,
      fontSize: 18,
      lineHeight: 24
    };

    return (
      <Text
        {...this.props}
        style={isArray(style) ? [appStyle, ...style] : [appStyle, style]}
      />
    );
  }
}
