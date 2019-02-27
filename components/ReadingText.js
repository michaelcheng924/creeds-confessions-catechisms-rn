import React from "react";
import { connect } from "react-redux";
import { isArray } from "lodash";
import { Text } from "react-native";

class ReadingText extends React.Component {
  render() {
    const {
      bold,
      fontSize,
      italic,
      multiplier = 1,
      selectedFont,
      selectedBackground,
      lineHeight,
      selectedAlign
    } = this.props;

    const size = fontSize * multiplier;

    const style = {
      color:
        selectedBackground === "White"
          ? "rgba(0, 0, 0, .84)"
          : selectedBackground === "Black"
            ? "#fff"
            : "#57422B",
      fontFamily: italic
        ? `${selectedFont}-italic`
        : bold
          ? `${selectedFont}-bold`
          : selectedFont,
      fontSize: size,
      lineHeight: size * lineHeight,
      textAlign: selectedAlign
    };

    return (
      <Text
        {...this.props}
        style={
          isArray(this.props.style)
            ? [style, ...this.props.style]
            : [style, this.props.style]
        }
      />
    );
  }
}

export default connect(state => state)(ReadingText);
