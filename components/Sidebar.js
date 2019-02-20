import React from "react";
import { connect } from "react-redux";
import {
  Animated,
  Dimensions,
  Easing,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AppText from "./AppText";
import Icon from "@expo/vector-icons";

import { handleSidebarDrag, setDocument, toggleSidebar } from "../actions";

class Sidebar extends React.Component {
  state = {
    leftAnim: new Animated.Value(-300),
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.showSidebar && this.props.showSidebar) {
      Animated.timing(this.state.leftAnim, {
        toValue: 0,
        duration: 300,
      }).start();
    }

    if (prevProps.showSidebar && !this.props.showSidebar) {
      Animated.timing(this.state.leftAnim, {
        toValue: -300,
        duration: 300,
      }).start();
    }

    if (prevProps.sidebarX !== this.props.sidebarX) {
      Animated.timing(this.state.leftAnim, {
        toValue: this.props.sidebarX,
        duration: 0,
        easing: Easing.linear,
      }).start();
    }
  }

  renderChapters() {
    const {
      confessionChapterIndex,
      documentData,
      setConfessionChapterIndex,
    } = this.props;

    if (documentData.type !== "confession") {
      return null;
    }

    return (
      <View>
        <View style={[styles.row, styles.rowHeading]}>
          <AppText>Table of Contents</AppText>
        </View>
        {documentData.content.map((chapter, index) => {
          return (
            <TouchableOpacity
              key={chapter.chapter}
              onPress={() => setConfessionChapterIndex(index)}
            >
              <View style={styles.row}>
                <AppText bold={index === confessionChapterIndex}>
                  {chapter.chapter}. {chapter.title}
                </AppText>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  renderCatechismSections() {
    const {
      catechismSectionIndex,
      documentData,
      setCatechismSectionIndex,
    } = this.props;

    if (documentData.slug !== "boys-girls") {
      return null;
    }

    return (
      <View>
        <View style={[styles.row, styles.rowHeading]}>
          <AppText>Table of Contents</AppText>
        </View>
        {documentData.content.map((section, index) => {
          return (
            <TouchableOpacity
              key={section.section}
              onPress={() => setCatechismSectionIndex(index)}
            >
              <View style={styles.row}>
                <AppText bold={index === catechismSectionIndex}>
                  {section.section}
                </AppText>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  render() {
    const {
      documentData,
      onHandleSidebarDrag,
      onSetDocument,
      onToggleSidebar,
      showSidebar,
    } = this.props;

    return (
      <Animated.ScrollView
        onStartShouldSetResponder={() => true}
        onResponderMove={evt => onHandleSidebarDrag(evt.nativeEvent.pageX)}
        onResponderRelease={evt =>
          onHandleSidebarDrag(evt.nativeEvent.pageX, true)
        }
        style={[
          styles.container,
          {
            left: this.state.leftAnim,
            shadowOpacity: showSidebar ? 0.3 : 0,
          },
        ]}
      >
        <View style={styles.row}>
          <TouchableOpacity onPress={() => onSetDocument(null)}>
            <View style={styles.closeDocument}>
              <Icon.Ionicons
                name="ios-arrow-down"
                size={25}
                style={{ marginRight: 10 }}
              />
              <AppText>CLOSE DOCUMENT</AppText>
            </View>
          </TouchableOpacity>
          <View style={styles.arrowleft}>
            <TouchableOpacity onPress={() => onToggleSidebar(false)}>
              <Icon.AntDesign color="#9e9e9e" name="arrowleft" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        {/* <TouchableOpacity onPress={() => true}>
          <View style={styles.row}>
            <Icon.Ionicons
              name="md-information-circle-outline"
              size={25}
              style={{ marginRight: 10 }}
            />
            <AppText style={{ flexShrink: 1 }}>
              About "The {documentData.title}"
            </AppText>
          </View>
        </TouchableOpacity> */}
        {this.renderChapters()}
        {this.renderCatechismSections()}
      </Animated.ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    height: Dimensions.get("window").height - (Platform.OS === "ios" ? 18 : 0),
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 0 },
    shadowRadius: 50,
    width: 300,
    zIndex: 2,
  },
  closeDocument: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  arrowleft: {
    position: "absolute",
    right: 10,
    top: 5,
  },
  row: {
    alignItems: "center",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    position: "relative",
  },
  rowHeading: {
    backgroundColor: "#e0e0e0",
  },
});

const mapStateToProps = state => state;

const mapDispatchToProps = {
  onHandleSidebarDrag: handleSidebarDrag,
  onSetDocument: setDocument,
  onToggleSidebar: toggleSidebar,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
