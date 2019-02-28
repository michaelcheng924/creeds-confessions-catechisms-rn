import React from "react";
import { connect } from "react-redux";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "@expo/vector-icons";

import { setDocument, toggleSettings, toggleSidebar } from "../actions";

class Menu extends React.Component {
  state = {
    heightAnim: new Animated.Value(38),
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.showSettings && this.props.showSettings) {
      Animated.timing(this.state.heightAnim, {
        toValue: 0,
        duration: 300,
      }).start();
    }

    if (prevProps.showSettings && !this.props.showSettings) {
      Animated.timing(this.state.heightAnim, {
        toValue: 38,
        duration: 300,
      }).start();
    }
  }

  render() {
    const {
      documentType,
      onSetDocument,
      onToggleSettings,
      onToggleSidebar,
      setCatechismIndex
    } = this.props;

    return (
      <Animated.View
        style={[
          styles.container,
          {
            height: this.state.heightAnim,
            paddingBottom: this.props.showSettings ? 0 : 5,
            paddingTop: this.props.showSettings ? 0 : 5,
          },
        ]}
      >
        <View style={styles.menuSection}>
          <TouchableOpacity onPress={() => {
            onSetDocument(null)
            setCatechismIndex()
          }}>
            <Icon.Ionicons
              color="rgba(0, 0, 0, .84)"
              name="ios-arrow-down"
              size={25}
            />
          </TouchableOpacity>
          {documentType === "confession" ? (
            <TouchableOpacity onPress={() => onToggleSidebar(true)}>
              <Icon.Ionicons
                color="rgba(0, 0, 0, .84)"
                name="ios-menu"
                size={25}
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        <Text style={styles.title}>The {this.props.title}</Text>
        <View style={styles.menuSection}>
          {/* <TouchableOpacity>
            <Icon.Ionicons
              name="ios-search"
              size={25}
              color="rgba(0, 0, 0, .84)"
            />
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => onToggleSettings(true)}>
            <Icon.MaterialCommunityIcons
              name="format-letter-case"
              size={25}
              color="rgba(0, 0, 0, .84)"
              style={{ marginLeft: 15 }}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
  },
  menuSection: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  title: {
    flexShrink: 1,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
  },
});

const mapDispatchToProps = {
  onSetDocument: setDocument,
  onToggleSettings: toggleSettings,
  onToggleSidebar: toggleSidebar,
};

export default connect(
  state => state,
  mapDispatchToProps
)(Menu);
