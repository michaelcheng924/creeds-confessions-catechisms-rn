import React from "react";
import { connect } from "react-redux";
import {
  Animated,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import AppText from "./AppText";
import Icon from "@expo/vector-icons";

import {
  increaseFontSize,
  decreaseFontSize,
  setSelectedFont,
  setSelectedBackground,
  increaseLineHeight,
  decreaseLineHeight,
  setSelectedAlign
} from "../actions";

const fontFamilies = [
  {
    label: "Baskerville",
    family: "baskerville"
  },
  {
    label: "Bookerly",
    family: "bookerly"
  },
  {
    label: "Georgia",
    family: "georgia"
  },
  {
    label: "Open Sans",
    family: "open-sans"
  },
  {
    label: "Palatino",
    family: "palatino"
  },
  {
    label: "Proxima Nova",
    family: "proxima-nova"
  }
];

const backgrounds = [
  {
    label: "White",
    background: "#fff",
    color: "rgba(0, 0, 0, .84)"
  },
  {
    label: "Black",
    background: "#000",
    color: "#fff"
  },
  {
    label: "Sepia",
    background: "#F3ECDA",
    color: "#57422B"
  }
];

const aligns = [
  {
    key: "justify"
  },
  {
    key: "left"
  }
];

class Reading extends React.Component {
  state = {
    bottomAnim: new Animated.Value(-400)
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.showSettings && this.props.showSettings) {
      Animated.timing(this.state.bottomAnim, {
        toValue: 0,
        duration: 300
      }).start();
    }

    if (prevProps.showSettings && !this.props.showSettings) {
      Animated.timing(this.state.bottomAnim, {
        toValue: -400,
        duration: 300
      }).start();
    }
  }

  renderFontSizeButtons() {
    return (
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => this.props.onIncreaseFontSize()}>
          <View
            style={[
              styles.button,
              {
                marginRight: 30
              }
            ]}
          >
            <Icon.MaterialCommunityIcons
              name="format-letter-case"
              size={25}
              color="rgba(0, 0, 0, .84)"
            />
            <Icon.FontAwesome
              name="caret-up"
              size={15}
              color="#039be5"
              style={{ marginLeft: 6 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.onDecreaseFontSize()}>
          <View style={styles.button}>
            <Icon.MaterialCommunityIcons
              name="format-letter-case"
              size={25}
              color="rgba(0, 0, 0, .84)"
            />
            <Icon.FontAwesome
              name="caret-down"
              size={15}
              color="#039be5"
              style={{ marginLeft: 6 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  renderFontFamilies() {
    return (
      <View style={styles.fontFamilies}>
        {fontFamilies.map(item => {
          return (
            <TouchableOpacity
              key={item.family}
              onPress={() => this.props.onSetSelectedFont(item.family)}
            >
              <AppText
                style={{
                  color:
                    this.props.selectedFont === item.family
                      ? "#039be5"
                      : "rgba(0, 0, 0, .84)",
                  fontFamily: item.family,
                  height: 30
                }}
              >
                {item.label}
              </AppText>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  renderBackgroundButtons() {
    return (
      <View style={[styles.buttons, styles.backgroundButtons]}>
        {backgrounds.map((item, index) => {
          const style = [
            styles.button,
            styles.backgroundButton,
            {
              backgroundColor: item.background,
              marginRight: index === 2 ? 0 : 20
            }
          ];

          if (this.props.selectedBackground === item.label) {
            style.push(styles.buttonActive);
          }

          return (
            <TouchableOpacity
              key={item.label}
              onPress={() => this.props.onSetSelectedBackground(item.label)}
            >
              <View style={style}>
                <AppText style={{ color: item.color }}>{item.label}</AppText>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  renderLineHeight() {
    return (
      <View style={[styles.buttons, styles.backgroundButtons]}>
        <TouchableOpacity onPress={() => this.props.onIncreaseLineHeight()}>
          <View style={[styles.button, { marginRight: 30 }]}>
            <View
              style={{
                borderBottomColor: "rgba(0, 0, 0, .84)",
                borderBottomWidth: 1,
                borderTopolor: "rgba(0, 0, 0, .84)",
                borderTopWidth: 1,
                display: "flex",
                height: 13,
                justifyContent: "center",
                width: 25
              }}
            >
              <View
                style={{
                  borderTopolor: "rgba(0, 0, 0, .84)",
                  borderTopWidth: 1,
                  height: 1,
                  width: 25
                }}
              />
            </View>
            <Icon.FontAwesome
              name="caret-up"
              size={15}
              color="#039be5"
              style={{ marginLeft: 6 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.onDecreaseLineHeight()}>
          <View style={styles.button}>
            <View
              style={{
                borderBottomColor: "rgba(0, 0, 0, .84)",
                borderBottomWidth: 1,
                borderTopolor: "rgba(0, 0, 0, .84)",
                borderTopWidth: 1,
                display: "flex",
                height: 19,
                justifyContent: "center",
                width: 25
              }}
            >
              <View
                style={{
                  borderTopolor: "rgba(0, 0, 0, .84)",
                  borderTopWidth: 1,
                  height: 1,
                  width: 25
                }}
              />
            </View>
            <Icon.FontAwesome
              name="caret-down"
              size={15}
              color="#039be5"
              style={{ marginLeft: 6 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  renderAlign() {
    return (
      <View style={[styles.buttons, styles.backgroundButtons]}>
        {aligns.map((item, index) => {
          const style = [
            styles.button,
            styles.alignButton,
            { marginRight: index === 1 ? 0 : 30 }
          ];

          if (this.props.selectedAlign === item.key) {
            style.push(styles.buttonActive);
          }

          return (
            <TouchableOpacity
              key={item.key}
              onPress={() => this.props.onSetSelectedAlign(item.key)}
            >
              <View style={style}>
                <View
                  style={{
                    borderTopolor: "rgba(0, 0, 0, .84)",
                    borderTopWidth: 1,
                    height: 1,
                    width: 25
                  }}
                />
                <View
                  style={{
                    borderTopolor: "rgba(0, 0, 0, .84)",
                    borderTopWidth: 1,
                    height: 1,
                    marginTop: 4,
                    width: index === 1 ? 18 : 25
                  }}
                />
                <View
                  style={{
                    borderTopolor: "rgba(0, 0, 0, .84)",
                    borderTopWidth: 1,
                    height: 1,
                    marginTop: 4,
                    width: 25
                  }}
                />
                <View
                  style={{
                    borderTopolor: "rgba(0, 0, 0, .84)",
                    borderTopWidth: 1,
                    height: 1,
                    marginTop: 4,
                    width: index === 1 ? 18 : 25
                  }}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  render() {
    const { bottomAnim } = this.state;

    return (
      <Animated.View
        style={[
          styles.container,
          {
            bottom: bottomAnim
          }
        ]}
      >
        {this.renderFontSizeButtons()}
        {this.renderFontFamilies()}
        {this.renderBackgroundButtons()}
        {this.renderLineHeight()}
        {this.renderAlign()}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderTopColor: "#9e9e9e",
    borderTopWidth: 1,
    height: 400,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    position: "absolute",
    width: Dimensions.get("window").width,
    zIndex: 1
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderColor: "#bdbdbd",
    borderRadius: 5,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    paddingBottom: 4,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 4
  },
  alignButton: {
    alignItems: "flex-start",
    flexDirection: "column"
  },
  backgroundButtons: {
    marginTop: 14
  },
  backgroundButton: {
    paddingLeft: 10,
    paddingRight: 10
  },
  buttonActive: {
    borderColor: "#039be5",
    borderWidth: 1
  },
  fontFamilies: {
    alignItems: "center",
    marginTop: 14,
    display: "flex"
  }
});

const mapStateToProps = state => state;

const mapDispatchToProps = {
  onIncreaseFontSize: increaseFontSize,
  onDecreaseFontSize: decreaseFontSize,
  onSetSelectedFont: setSelectedFont,
  onSetSelectedBackground: setSelectedBackground,
  onIncreaseLineHeight: increaseLineHeight,
  onDecreaseLineHeight: decreaseLineHeight,
  onSetSelectedAlign: setSelectedAlign
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reading);
