import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

class StatusBarBackground extends Component {
  render() {
    return <View style={styles.statusBarBackground} />;
  }
}

const styles = StyleSheet.create({
  statusBarBackground: {
    height: Platform.OS === "ios" ? 18 : 0,
    backgroundColor: "#039be5"
  }
});

module.exports = StatusBarBackground;
