import React from "react";
import { connect } from "react-redux";
import {
  Animated,
  Dimensions,
  Platform,
  ScrollView,
  Slider,
  StyleSheet,
  Switch,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AppText from "./AppText";
import ReadingText from "./ReadingText";
import { defer, isString } from "lodash";
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
    catechismIndex: 0,
    catechismSectionIndex: 0,
    catechismShowAnswers: true,
    catechismShowScriptures: true,
    catechismShowSingle: false,
    confessionChapterIndex: 0,
    document: {
      content: [],
    },
    opacityAnim: new Animated.Value(0),
    scriptures: null,
    topAnim: new Animated.Value(Dimensions.get("window").height),
  };

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.document && this.props.document) {
      Animated.timing(this.state.topAnim, {
        toValue: 0,
        duration: 300,
      }).start();

      this.setState({
        document: mappedDocuments[this.props.document],
      });
    }

    if (prevProps.document && !this.props.document) {
      Animated.timing(this.state.topAnim, {
        toValue: Dimensions.get("window").height,
        duration: 300,
      }).start();
    }

    if (
      (!prevProps.showSidebar && this.props.showSidebar) ||
      (!prevState.modal && this.state.modal)
    ) {
      Animated.timing(this.state.opacityAnim, {
        toValue: 0.3,
        duration: 300,
      }).start();
    }

    if (
      (prevProps.showSidebar && !this.props.showSidebar) ||
      (prevState.modal && !this.state.modal)
    ) {
      Animated.timing(this.state.opacityAnim, {
        toValue: 0,
        duration: 300,
      }).start();
    }
  }

  setConfessionChapterIndex = confessionChapterIndex => {
    this.setState({
      confessionChapterIndex,
    });
    this.props.onToggleSidebar(false);

    defer(() => {
      this.readingView.scrollTo({ y: 0 });
    });
  };

  setCatechismSectionIndex = catechismSectionIndex => {
    this.setState({
      catechismSectionIndex,
    });
    this.props.onToggleSidebar(false);
  };

  renderCreed() {
    const { document } = this.state;

    return (
      <View style={styles.paddingSides}>
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

    let superscript = 0;

    return (
      <View style={{ position: "relative" }}>
        {this.renderConfessionNav()}
        <View style={styles.paddingSides}>
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
                <ReadingText bold>{`${index + 1}. `}</ReadingText>
                {paragraph.map((section, index1) => {
                  if (section.scriptures) {
                    superscript++;
                  }

                  return (
                    <ReadingText key={index1}>
                      <ReadingText>{`${section.text} `}</ReadingText>
                      {section.scriptures ? (
                        <ReadingText
                          bold
                          onPress={() =>
                            this.setState({
                              modal: {
                                section: `${section.text} (${superscript})`,
                                scriptures: section.scriptures.split("; "),
                              },
                            })
                          }
                          style={{
                            color: "#039be5",
                          }}
                        >
                          {`(${superscript}) `}
                        </ReadingText>
                      ) : null}
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
      <View style={styles.modal}>
        <View
          style={[
            styles.confessionNav,
            {
              borderBottomColor: "#757575",
              borderBottomWidth: 1,
              paddingBottom: 5,
              paddingRight: 10,
              paddingTop: 5,
            },
          ]}
        >
          <View style={{ width: 40 }} />
          <AppText bold>Scripture References</AppText>
          <TouchableOpacity onPress={() => this.setState({ modal: null })}>
            <Icon.Entypo color="#039be5" name="cross" size={25} />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={{ padding: 20, paddingTop: 5 }}>
            <ReadingText italic>{modal.section}</ReadingText>

            {modal.scriptures.map((scripture, index) => {
              const chapters = {};

              if (!scripture) {
                return null;
              }

              const parsed = bcv.parse(scripture);

              let count = -1;

              const results = [];

              parsed.entities[0].passages.forEach(function(passageData) {
                const start = passageData.start;
                const end = passageData.end;
                const book = bibleMapping[start.b];
                const startChapter = start.c;
                const startVerse = start.v;
                const endChapter = end.c;
                const endVerse = end.v;

                for (let c = startChapter; c <= endChapter; c++) {
                  count++;

                  results.push({
                    chapter: c,
                    verses: [],
                  });

                  if (!startVerse) {
                    for (const v in scripturesObj[book][c]) {
                      results[count].verses.push({
                        verse: v,
                        text: scripturesObj[book][c][v],
                      });
                    }
                  } else {
                    for (let v = startVerse; v <= endVerse; v++) {
                      results[count].verses.push({
                        verse: v,
                        text: scripturesObj[book][c][v],
                      });
                    }
                  }
                }
              });

              return (
                <View key={index} style={{ marginTop: 25 }}>
                  <ReadingText bold>{scripture} (ESV)</ReadingText>

                  {results.length === 1 ? (
                    <ReadingText>
                      {results.map(chapter => {
                        return chapter.verses.map((item, index1) => {
                          return (
                            <ReadingText key={index1}>
                              <ReadingText bold>{`${item.verse} `}</ReadingText>
                              <ReadingText>{`${item.text} `}</ReadingText>
                            </ReadingText>
                          );
                        });
                      })}
                    </ReadingText>
                  ) : (
                    results.map((chapter, index2) => {
                      const chapterRendered = chapters[chapter.chapter];

                      chapters[chapter.chapter] = true;

                      return (
                        <View key={index2}>
                          {chapterRendered ? null : (
                            <ReadingText
                              italic
                              style={{ marginTop: index2 === 0 ? 0 : 25 }}
                            >
                              Chapter {chapter.chapter}
                            </ReadingText>
                          )}
                          <ReadingText>
                            {chapter.verses.map((item, index3) => {
                              return (
                                <ReadingText key={index3}>
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
      </View>
    );
  }

  renderBoysGirls() {
    const { catechismSectionIndex, document } = this.state;
    const { fontSize } = this.props;

    if (document.slug !== "boys-girls") {
      return null;
    }

    const section = document.content[catechismSectionIndex];

    return (
      <View style={styles.paddingSides}>
        <ReadingText bold>{section.section}</ReadingText>
        {section.questions.map(question => {
          return (
            <View key={question.number} style={{ marginTop: 25 }}>
              <ReadingText bold>
                {question.number}. {question.question}
              </ReadingText>
              <ReadingText>
                {`${question.answer} `}
                <Icon.MaterialCommunityIcons
                  color="#795548"
                  name="bible"
                  onPress={() =>
                    this.setState({
                      modal: {
                        section: question.question,
                        scriptures: question.scriptures.split(";"),
                      },
                    })
                  }
                  size={fontSize}
                />
              </ReadingText>
            </View>
          );
        })}
      </View>
    );
  }

  renderCatechismQuestion(question, index) {
    const { catechismShowAnswers, catechismShowScriptures } = this.state;

    let footnoteCount = 0;

    return (
      <View key={index} style={{ marginBottom: 25 }}>
        <ReadingText bold>
          {index + 1}. {question.question}
        </ReadingText>
        {catechismShowAnswers ? (
          <ReadingText>
            {question.answer.map((section, index1) => {
              footnoteCount++;

              return (
                <ReadingText key={index1}>
                  <ReadingText>{`${section.text} `}</ReadingText>
                  <ReadingText
                    bold
                    onPress={() =>
                      this.setState({
                        modal: {
                          section: section.text,
                          scriptures: section.scriptures.split("; "),
                        },
                      })
                    }
                    style={{ color: "#039be5" }}
                  >{`(${
                    catechismShowScriptures ? section.scriptures : footnoteCount
                  }) `}</ReadingText>
                </ReadingText>
              );
            })}
          </ReadingText>
        ) : null}
      </View>
    );
  }

  renderCatechism() {
    const {
      catechismIndex,
      catechismShowAnswers,
      catechismShowScriptures,
      catechismShowSingle,
      document,
    } = this.state;

    if (document.type !== "catechism") {
      return null;
    }

    const singleCatechismQuestion = document.content[catechismIndex];

    const content = catechismShowSingle
      ? this.renderCatechismQuestion(singleCatechismQuestion, catechismIndex)
      : document.content.map((question, index) => {
          return this.renderCatechismQuestion(question, index);
        });

    return (
      <View>
        <View style={styles.paddingSides}>
          <View style={styles.switchers}>
            <View style={styles.switcher}>
              <Switch
                value={catechismShowSingle}
                onValueChange={() =>
                  this.setState({ catechismShowSingle: !catechismShowSingle })
                }
              />
              <AppText semibold style={{ marginLeft: 10 }}>
                Single-question view
              </AppText>
            </View>
            <View style={styles.switcher}>
              <Switch
                value={catechismShowScriptures}
                onValueChange={() =>
                  this.setState({
                    catechismShowScriptures: !catechismShowScriptures,
                  })
                }
              />
              <AppText semibold style={{ marginLeft: 10 }}>
                Show scripture references
              </AppText>
            </View>
            <View style={styles.switcher}>
              <Switch
                value={catechismShowAnswers}
                onValueChange={() =>
                  this.setState({
                    catechismShowAnswers: !catechismShowAnswers,
                  })
                }
              />
              <AppText semibold style={{ marginLeft: 10 }}>
                {catechismShowSingle ? "Show answer" : "Show answers"}
              </AppText>
            </View>
          </View>
        </View>

        {catechismShowSingle ? (
          <View style={[styles.confessionNav, { marginBottom: 20 }]}>
            {catechismIndex === 0 ? (
              <View style={{ width: 45 }} />
            ) : (
              <TouchableOpacity
                onPress={() =>
                  this.setState({ catechismIndex: catechismIndex - 1 })
                }
              >
                <View style={styles.confessionNavSection}>
                  <Icon.Entypo
                    color="#039be5"
                    name="chevron-thin-left"
                    size={25}
                  />
                  <AppText bold style={styles.confessionNavTitle}>
                    {catechismIndex}
                  </AppText>
                </View>
              </TouchableOpacity>
            )}
            <Slider
              maximumValue={document.content.length - 1}
              minimumValue={0}
              step={1}
              onValueChange={value => {
                this.setState({ catechismIndex: value });
              }}
              style={{ width: Dimensions.get("window").width - 110 }}
              value={catechismIndex}
            />
            {catechismIndex === document.content.length - 1 ? (
              <View style={{ width: 45 }} />
            ) : (
              <TouchableOpacity
                onPress={() =>
                  this.setState({ catechismIndex: catechismIndex + 1 })
                }
              >
                <View style={styles.confessionNavSection}>
                  <AppText bold style={styles.confessionNavTitle}>
                    {catechismIndex + 2}
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
        ) : null}

        <View style={styles.paddingSides}>{content}</View>
      </View>
    );
  }

  render() {
    const {
      catechismSectionIndex,
      confessionChapterIndex,
      document,
      modal,
      opacityAnim,
      topAnim,
    } = this.state;
    const {
      onHandleSidebarDrag,
      onToggleSettings,
      selectedBackground,
      showSettings,
      showSidebar,
    } = this.props;

    const content = (
      <View style={{ paddingBottom: 60 }}>
        {document.type === "creed" && this.renderCreed()}
        {document.type === "confession" && this.renderConfession()}
        {document.type === "catechism" && this.renderCatechism()}
      </View>
    );

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
            top: topAnim,
          },
        ]}
      >
        {this.renderScriptures()}
        <Sidebar
          catechismSectionIndex={catechismSectionIndex}
          confessionChapterIndex={confessionChapterIndex}
          documentData={document}
          setCatechismSectionIndex={this.setCatechismSectionIndex}
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
                zIndex: showSidebar || modal ? 1 : 0,
              },
            ]}
          />
          <Menu documentData={document} title={document.title} />
          <ScrollView
            onScrollBeginDrag={() =>
              showSettings ? onToggleSettings(false) : null
            }
            ref={readingView => (this.readingView = readingView)}
            style={styles.readingContainer}
          >
            {showSettings ? (
              <TouchableWithoutFeedback onPress={() => onToggleSettings(false)}>
                {content}
              </TouchableWithoutFeedback>
            ) : (
              <View style={{ paddingBottom: 25 }}>{content}</View>
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
    zIndex: 1,
  },
  readingContainer: {
    paddingBottom: 20,
    paddingTop: 20,
  },
  paddingSides: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  overlay: {
    backgroundColor: "#000",
    height: Dimensions.get("window").height - (Platform.OS === "ios" ? 18 : 0),
    position: "absolute",
    top: 0,
    width: Dimensions.get("window").width,
  },
  modal: {
    backgroundColor: "#fff",
    borderColor: "#9e9e9e",
    borderRadius: 5,
    borderWidth: 1,
    height: Dimensions.get("window").height - 128,
    left: 20,
    position: "absolute",
    top: 50,
    width: Dimensions.get("window").width - 40,
    zIndex: 3,
  },
  switchers: {
    marginBottom: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  switcher: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  paragraph: {
    marginBottom: 25,
  },
  indent: {
    marginLeft: 20,
  },
  italic: {
    fontStyle: "italic",
  },
  listItem: {
    marginBottom: 10,
  },
  chapterTitle: {
    marginBottom: 10,
  },
  confessionNav: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  confessionNavSection: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  confessionNavTitle: {
    color: "#039be5",
    position: "relative",
    top: -2,
    maxWidth: (Dimensions.get("window").width - 80) / 2,
  },
});

const mapStateToProps = state => state;

const mapDispatchToProps = {
  onHandleSidebarDrag: handleSidebarDrag,
  onToggleSettings: toggleSettings,
  onToggleSidebar: toggleSidebar,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reading);
