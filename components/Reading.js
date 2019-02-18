import React from "react";
import { connect } from "react-redux";
import {
  Animated,
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import AppText from "./AppText";
import ReadingText from "./ReadingText";
import { isString } from "lodash";
import Icon from "@expo/vector-icons";

import bibleMapping from "../constants/bibleMapping.js";
import scripturesObj from "../constants/scriptures";
import { mappedDocuments } from "../constants/documents";
import { handleSidebarDrag, toggleSettings, toggleSidebar } from "../actions";

import Menu from "./Menu";
import Sidebar from "./Sidebar";

require("../utils/bcv_parser");

const bcv = new bcv_parser();

class Reading extends React.Component {
  state = {
    confessionChapterIndex: 0,
    document: {
      content: []
    },
    opacityAnim: new Animated.Value(0),
    scriptures: null,
    topAnim: new Animated.Value(Dimensions.get("window").height)
  };

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.document && this.props.document) {
      Animated.timing(this.state.topAnim, {
        toValue: 0,
        duration: 300
      }).start();

      this.setState({
        document: mappedDocuments[this.props.document]
      });
    }

    if (prevProps.document && !this.props.document) {
      Animated.timing(this.state.topAnim, {
        toValue: Dimensions.get("window").height,
        duration: 300
      }).start();
    }

    if (
      (!prevProps.showSidebar && this.props.showSidebar) ||
      (!prevState.modal && this.state.modal)
    ) {
      Animated.timing(this.state.opacityAnim, {
        toValue: 0.3,
        duration: 300
      }).start();
    }

    if (
      (prevProps.showSidebar && !this.props.showSidebar) ||
      (prevState.modal && !this.state.modal)
    ) {
      Animated.timing(this.state.opacityAnim, {
        toValue: 0,
        duration: 300
      }).start();
    }
  }

  setConfessionChapterIndex = confessionChapterIndex => {
    this.setState({
      confessionChapterIndex
    });
    this.props.onToggleSidebar(false);
  };

  renderCreed() {
    const { document } = this.state;

    return (
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        {document.content.map((paragraph, index) => {
          return (
            <View key={index} style={{ marginBottom: 15 }}>
              {paragraph.paragraph.map((section, index) => {
                return (
                  <ReadingText
                    key={index}
                    style={
                      section.styles &&
                      section.styles.map(style => styles[style])
                    }
                  >
                    {section.text}
                  </ReadingText>
                );
              })}
            </View>
          );
        })}
      </View>
    );
  }

  renderConfessionNav() {
    const { confessionChapterIndex, document } = this.state;

    const prevChapter = document.content[confessionChapterIndex - 1];
    const nextChapter = document.content[confessionChapterIndex + 1];

    return (
      <View style={styles.confessionNav}>
        {confessionChapterIndex === 0 ? (
          <View />
        ) : (
          <TouchableOpacity
            onPress={() =>
              this.setConfessionChapterIndex(confessionChapterIndex - 1)
            }
          >
            <View style={styles.confessionNavSection}>
              <Icon.Entypo color="#039be5" name="chevron-thin-left" size={25} />
              <AppText bold style={styles.confessionNavTitle}>
                {prevChapter.chapter}. {prevChapter.title}
              </AppText>
            </View>
          </TouchableOpacity>
        )}
        {confessionChapterIndex === document.content.length - 1 ? (
          <View />
        ) : (
          <TouchableOpacity
            onPress={() =>
              this.setConfessionChapterIndex(confessionChapterIndex + 1)
            }
          >
            <View style={styles.confessionNavSection}>
              <AppText bold style={styles.confessionNavTitle}>
                {nextChapter.chapter}. {nextChapter.title}
              </AppText>
              <Icon.Entypo
                color="#039be5"
                name="chevron-thin-right"
                size={25}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  renderConfession() {
    const { confessionChapterIndex, document } = this.state;

    const chapter = document.content[confessionChapterIndex];

    return (
      <View style={{ position: "relative" }}>
        {this.renderConfessionNav()}
        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
          <ReadingText bold multiplier={1.25} style={{ marginBottom: 10 }}>
            {chapter.chapter}. {chapter.title}
          </ReadingText>
          {chapter.content.map((paragraph, index) => {
            if (isString(paragraph)) {
              return (
                <ReadingText key={index} style={styles.paragraph}>
                  {paragraph}
                </ReadingText>
              );
            }

            return (
              <ReadingText key={index} style={styles.paragraph}>
                {paragraph.map((section, index1) => {
                  return (
                    <ReadingText key={index1}>
                      <ReadingText>{`${section.text} `}</ReadingText>
                      <ReadingText
                        bold
                        onPress={() =>
                          this.setState({
                            modal: {
                              section: section.text,
                              scriptures: section.scriptures
                            }
                          })
                        }
                        style={{
                          color: "#039be5"
                        }}
                      >
                        {`(${section.superscript}) `}
                      </ReadingText>
                    </ReadingText>
                  );
                })}
              </ReadingText>
            );
          })}
        </View>
        {this.renderConfessionNav()}
      </View>
    );
  }

  renderScriptures() {
    const { modal } = this.state;

    if (!modal) {
      return null;
    }

    return (
      <ScrollView style={styles.modal}>
        <View>
          <ReadingText italic style={{ marginBottom: 25 }}>
            {modal.section}
          </ReadingText>

          {modal.scriptures.map(scripture => {
            const parsed = bcv.parse(scripture);

            const results = [];

            parsed.entities[0].passages.forEach(function(passageData) {
              const start = passageData.start;
              const end = passageData.end;
              const book = bibleMapping[start.b];
              const startChapter = start.c;
              const startVerse = start.v;
              const endChapter = end.c;
              const endVerse = end.v;

              let count = 0;

              for (let c = startChapter; c <= endChapter; c++) {
                results.push({
                  chapter: c,
                  verses: []
                });

                if (!startVerse) {
                  for (const v in scripturesObj[book][c]) {
                    results[count].verses.push({
                      verse: v,
                      text: scripturesObj[book][c][v]
                    });
                  }
                } else {
                  for (let v = startVerse; v <= endVerse; v++) {
                    results[count].verses.push({
                      verse: v,
                      text: scripturesObj[book][c][v]
                    });
                  }
                }

                count++;
              }
            });

            return (
              <View key={scripture} style={{ marginBottom: 25 }}>
                <ReadingText bold>{scripture} (ESV)</ReadingText>

                {results.length === 1 ? (
                  <ReadingText>
                    {results.map((chapter, index) => {
                      return chapter.verses.map(item => {
                        return (
                          <ReadingText key={index}>
                            <ReadingText bold>{`${item.verse} `}</ReadingText>
                            <ReadingText>{`${item.text} `}</ReadingText>
                          </ReadingText>
                        );
                      });
                    })}
                  </ReadingText>
                ) : (
                  results.map((chapter, index) => {
                    return (
                      <View key={chapter.chapter} style={{ marginBottom: 25 }}>
                        <ReadingText italic>
                          Chapter {chapter.chapter}
                        </ReadingText>
                        <ReadingText>
                          {chapter.verses.map(item => {
                            return (
                              <ReadingText key={index}>
                                <ReadingText bold>{`${
                                  item.verse
                                } `}</ReadingText>
                                <ReadingText>{`${item.text} `}</ReadingText>
                              </ReadingText>
                            );
                          })}
                        </ReadingText>
                      </View>
                    );
                  })
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }

  render() {
    const {
      confessionChapterIndex,
      document,
      modal,
      opacityAnim,
      topAnim
    } = this.state;
    const {
      onHandleSidebarDrag,
      onToggleSettings,
      selectedBackground,
      showSettings,
      showSidebar
    } = this.props;

    return (
      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor:
              selectedBackground === "White"
                ? "#fff"
                : selectedBackground === "Black"
                ? "#000"
                : "#F3ECDA",
            top: topAnim
          }
        ]}
      >
        {this.renderScriptures()}
        <Sidebar
          confessionChapterIndex={confessionChapterIndex}
          documentData={document}
          setConfessionChapterIndex={this.setConfessionChapterIndex}
        />

        <View>
          <Animated.View
            onMoveShouldSetResponder={() => showSidebar || modal}
            onResponderMove={evt =>
              showSidebar ? onHandleSidebarDrag(evt.nativeEvent.pageX) : null
            }
            onResponderRelease={evt =>
              showSidebar
                ? onHandleSidebarDrag(evt.nativeEvent.pageX, true, true)
                : this.setState({ modal: null })
            }
            style={[
              styles.overlay,
              {
                opacity: opacityAnim,
                zIndex: showSidebar || modal ? 1 : 0
              }
            ]}
          />
          <Menu title={document.title} />
          <ScrollView
            onScrollBeginDrag={() =>
              showSettings ? onToggleSettings(false) : null
            }
            style={styles.readingContainer}
          >
            {showSettings ? (
              <TouchableWithoutFeedback onPress={() => onToggleSettings(false)}>
                <View style={{ paddingBottom: 60 }}>
                  {document.type === "creed" && this.renderCreed()}
                  {document.type === "confession" && this.renderConfession()}
                </View>
              </TouchableWithoutFeedback>
            ) : (
              <View style={{ paddingBottom: 60 }}>
                {document.type === "creed" && this.renderCreed()}
                {document.type === "confession" && this.renderConfession()}
              </View>
            )}
          </ScrollView>
        </View>
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
  },
  readingContainer: {
    paddingBottom: 20,
    paddingTop: 20
  },
  overlay: {
    backgroundColor: "#000",
    height: Dimensions.get("window").height - (Platform.OS === "ios" ? 18 : 0),
    position: "absolute",
    top: 0,
    width: Dimensions.get("window").width
  },
  modal: {
    backgroundColor: "#fff",
    borderColor: "#9e9e9e",
    borderRadius: 5,
    borderWidth: 1,
    height: Dimensions.get("window").height - 138,
    left: 50,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    position: "absolute",
    top: 50,
    width: Dimensions.get("window").width - 100,
    zIndex: 3
  },
  paragraph: {
    marginBottom: 25
  },
  indent: {
    marginLeft: 20
  },
  italic: {
    fontStyle: "italic"
  },
  listItem: {
    marginBottom: 10
  },
  chapterTitle: {
    marginBottom: 10
  },
  confessionNav: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  confessionNavSection: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row"
  },
  confessionNavTitle: {
    color: "#039be5",
    position: "relative",
    top: -2,
    maxWidth: (Dimensions.get("window").width - 80) / 2
  }
});

const mapStateToProps = state => state;

const mapDispatchToProps = {
  onHandleSidebarDrag: handleSidebarDrag,
  onToggleSettings: toggleSettings,
  onToggleSidebar: toggleSidebar
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reading);
