import React from "react";
import { connect } from "react-redux";
import {
  Animated,
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { isString } from "lodash";

import { mappedDocuments } from "../constants/documents";
// import { handleSidebarDrag, toggleSidebar } from "../actions";

import Menu from "./Menu";
import Sidebar from "./Sidebar";

class Reading extends React.Component {
  state = {
    topAnim: new Animated.Value(Dimensions.get("window").height)
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.showSearch && this.props.showSearch) {
      Animated.timing(this.state.topAnim, {
        toValue: 0,
        duration: 300
      }).start();
    }

    if (prevProps.showSearch && !this.props.showSearch) {
      Animated.timing(this.state.topAnim, {
        toValue: Dimensions.get("window").height,
        duration: 300
      }).start();
    }
  }

  render() {
    return (
      <Animated.View
        style={[
          styles.container,
          {
            top: this.state.topAnim
          }
        ]}
      >
        <Text>SEARCH</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: Dimensions.get("window").height - (Platform.OS === "ios" ? 18 : 0),
    position: "absolute",
    width: Dimensions.get("window").width,
    zIndex: 1
  }
});

const mapStateToProps = state => state;

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reading);
