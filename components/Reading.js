import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Platform,
  ScrollView,
  Slider,
  StyleSheet,
  Switch,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import AppText from "./AppText";
import ReadingText from "./ReadingText";
import { defer, find, isArray, isString, map } from "lodash";
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
    answerText: "",
    cccData: null,
    catechismIndex: 0,
    catechismSectionIndex: 0,
    catechismShowAnswers: true,
    catechismShowSingleAnswer: false,
    catechismShowSingle: true,
    catechismViewMode: "below",
    commentComment: "",
    commentName: "",
    confessionChapterIndex: 0,
    document: {
      content: []
    },
    hideCatechismSettings: true,
    opacityAnim: new Animated.Value(0),
    scriptures: null,
    showComments: false,
    topAnim: new Animated.Value(Dimensions.get("window").height)
  };

  componentDidMount() {
    this.getCCCData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.document && this.props.document) {
      const likes = find(this.state.cccData, data => {
        return data.slug === `likes-${this.props.document}`;
      });

      if (!likes) {
        fetch("https://mcc-admin.herokuapp.com/ccc/initializeccc", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ slug: this.props.document })
        }).then(() => {
          this.getCCCData();
        });
      }

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

  getCCCData() {
    fetch("https://mcc-admin.herokuapp.com/ccc/documentsdata")
      .then(r => r.json())
      .then(r => {
        this.setState({ cccData: r.cccData });
      });
  }

  setConfessionChapterIndex = confessionChapterIndex => {
    this.setState({
      confessionChapterIndex
    });
    this.props.onToggleSidebar(false);

    defer(() => {
      this.readingView.scrollTo({ y: 0 });
    });
  };

  setCatechismIndex = (index = 0) => {
    this.setState({
      answerText: "",
      catechismIndex: index,
      catechismShowSingleAnswer: false
    });
  };

  setCatechismSectionIndex = catechismSectionIndex => {
    this.setState({
      catechismSectionIndex
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
    let hideParagraphNumbers = false;

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

            if (paragraph[0].title) {
              hideParagraphNumbers = true;

              return paragraph.map((section, index1) => {
                return (
                  <View key={index1} style={styles.paragraph}>
                    <ReadingText bold>{section.title}</ReadingText>
                    <ReadingText>{section.text}</ReadingText>
                  </View>
                );
              });
            }

            return (
              <ReadingText
                key={index}
                style={[
                  styles.paragraph,
                  paragraph[0].styles &&
                    paragraph[0].styles.map(style => styles[style])
                ]}
              >
                {hideParagraphNumbers ? null : (
                  <ReadingText bold>{`${index + 1}. `}</ReadingText>
                )}

                {paragraph.map((section, index1) => {
                  if (section.scriptures) {
                    superscript++;
                  }

                  return (
                    <ReadingText key={index1}>
                      {section.number ? (
                        <ReadingText bold>{`${section.number}. `}</ReadingText>
                      ) : null}
                      <ReadingText
                        italic={
                          section.styles &&
                          section.styles.indexOf("italic") !== -1
                        }
                      >{`${section.text} `}</ReadingText>
                      {section.scriptures ? (
                        <ReadingText
                          bold
                          onPress={() =>
                            this.setState({
                              modal: {
                                section: `${section.text} (${superscript})`,
                                scriptures: section.scriptures.split("; ")
                              }
                            })
                          }
                          style={{
                            color: "#039be5"
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

  renderModal() {
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
              paddingTop: 5
            }
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

  renderParagraph(paragraph, footnoteCount, paragraphIndex) {
    const { catechismViewMode } = this.state;

    return (
      <ReadingText key={paragraphIndex}>
        {paragraph.map((section, index) => {
          if (section.scriptures) {
            footnoteCount.count++;
          }

          return (
            <ReadingText key={index}>
              <ReadingText>{`${section.text} `}</ReadingText>
              {section.scriptures && catechismViewMode !== "noscriptures" ? (
                <ReadingText
                  bold
                  onPress={() =>
                    this.setState({
                      modal: {
                        section: section.text,
                        scriptures: section.scriptures.split("; ")
                      }
                    })
                  }
                  style={{ color: "#039be5" }}
                >{`(${
                  catechismViewMode === "inline"
                    ? section.scriptures
                    : footnoteCount.count
                }) `}</ReadingText>
              ) : null}
            </ReadingText>
          );
        })}
      </ReadingText>
    );
  }

  renderBelowScriptures(paragraph, footnoteCount) {
    return paragraph.map((section, index) => {
      if (!section.scriptures) {
        return null;
      }

      footnoteCount.count++;

      return (
        <TouchableOpacity
          key={index}
          onPress={() =>
            this.setState({
              modal: {
                section: section.text,
                scriptures: section.scriptures.split("; ")
              }
            })
          }
        >
          <ReadingText>
            <ReadingText bold style={{ color: "#039be5" }}>{`(${
              footnoteCount.count
            }) `}</ReadingText>
            <ReadingText style={{ color: "#039be5" }}>
              {section.scriptures}
            </ReadingText>
          </ReadingText>
        </TouchableOpacity>
      );
    });
  }

  renderCatechismSettings() {
    const {
      catechismShowAnswers,
      catechismViewMode,
      catechismShowSingle,
      hideCatechismSettings
    } = this.state;

    return (
      <View>
        {this.renderTitleImage()}
        <TouchableOpacity
          onPress={() =>
            this.setState({ hideCatechismSettings: !hideCatechismSettings })
          }
        >
          <AppText
            style={{
              color: "#039be5",
              marginBottom: 10,
              textAlign: "center"
            }}
          >
            {hideCatechismSettings ? "Show settings" : "Hide settings"}
          </AppText>
        </TouchableOpacity>
        {hideCatechismSettings ? null : (
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

              <AppText bold>View mode</AppText>
              <TouchableOpacity
                onPress={() =>
                  this.setState({ catechismViewMode: "noscriptures" })
                }
              >
                <View
                  style={[
                    styles.viewMode,
                    catechismViewMode === "noscriptures"
                      ? styles.viewModeActive
                      : null
                  ]}
                >
                  <ReadingText>No scriptures</ReadingText>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.setState({ catechismViewMode: "number" })}
              >
                <View
                  style={[
                    styles.viewMode,
                    catechismViewMode === "number"
                      ? styles.viewModeActive
                      : null
                  ]}
                >
                  <ReadingText>
                    <ReadingText>{`Scriptures as number `}</ReadingText>
                    <ReadingText bold style={{ color: "#039be5" }}>
                      (1)
                    </ReadingText>
                  </ReadingText>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.setState({ catechismViewMode: "inline" })}
              >
                <View
                  style={[
                    styles.viewMode,
                    catechismViewMode === "inline"
                      ? styles.viewModeActive
                      : null
                  ]}
                >
                  <ReadingText>
                    <ReadingText>{`Inline scriptures `}</ReadingText>
                    <ReadingText bold style={{ color: "#039be5" }}>
                      (2 Cor. 5:21; John 3:16)
                    </ReadingText>
                  </ReadingText>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.setState({ catechismViewMode: "below" })}
              >
                <View
                  style={[
                    styles.viewMode,
                    catechismViewMode === "below" ? styles.viewModeActive : null
                  ]}
                >
                  <ReadingText style={{ marginBottom: 10 }}>
                    <ReadingText>{`Scriptures below `}</ReadingText>
                    <ReadingText
                      bold
                      style={{
                        color: "#039be5"
                      }}
                    >
                      (1)
                    </ReadingText>
                  </ReadingText>
                  <ReadingText>
                    <ReadingText
                      bold
                      style={{ color: "#039be5" }}
                    >{`(1) `}</ReadingText>
                    <ReadingText
                      style={{
                        color: "#039be5"
                      }}
                    >
                      2 Cor. 5:21; John 3:16
                    </ReadingText>
                  </ReadingText>
                </View>
              </TouchableOpacity>

              {catechismShowSingle ? null : (
                <View style={styles.switcher}>
                  <Switch
                    value={catechismShowAnswers}
                    onValueChange={() =>
                      this.setState({
                        catechismShowAnswers: !catechismShowAnswers
                      })
                    }
                  />
                  <AppText semibold style={{ marginLeft: 10 }}>
                    {"Show answers"}
                  </AppText>
                </View>
              )}
            </View>
          </View>
        )}
      </View>
    );
  }

  renderCatechismNav() {
    const { catechismIndex, document } = this.state;

    return (
      <View style={[styles.confessionNav, { marginBottom: 20 }]}>
        {catechismIndex === 0 ? (
          <View style={{ width: 45 }} />
        ) : (
          <TouchableOpacity
            onPress={() => this.setCatechismIndex(catechismIndex - 1)}
          >
            <View style={styles.confessionNavSection}>
              <Icon.Entypo color="#039be5" name="chevron-thin-left" size={25} />
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
          onValueChange={value => this.setCatechismIndex(value)}
          style={{ width: Dimensions.get("window").width - 110 }}
          value={catechismIndex}
        />
        {catechismIndex === document.content.length - 1 ? (
          <View style={{ width: 45 }} />
        ) : (
          <TouchableOpacity
            onPress={() => this.setCatechismIndex(catechismIndex + 1)}
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
    );
  }

  renderAnswerForm(answer) {
    const { answerText } = this.state;

    const answersArr = [];

    answer.forEach(item => {
      if (isArray(item)) {
        item.forEach(item1 => {
          answersArr.push(item1.text);
        });
      } else {
        answersArr.push(item.text);
      }
    });

    const typedAnswerArr = answerText.split(" ");
    const finalAnswerArr = answersArr.join(" ").split(" ");

    let matchesArr = [];
    let matches = true;

    finalAnswerArr.forEach((word, index) => {
      if (matches) {
        let isMatch = false;

        if (typedAnswerArr[index]) {
          isMatch =
            word.toLowerCase().replace(/[^a-z]/g, "") ===
            typedAnswerArr[index].toLowerCase().replace(/[^a-z]/g, "");
        }

        if (isMatch) {
          matchesArr.push(word);

          if (matchesArr.length === finalAnswerArr.length) {
            this.setState({ catechismShowSingleAnswer: true });
          }
        } else {
          matchesArr.push(typedAnswerArr[index] || "");
          matches = false;
        }
      }
    });

    let wrongWord;

    if (!matches) {
      wrongWord = matchesArr.pop();
    }

    return (
      <View>
        <TextInput
          onChangeText={text => this.setState({ answerText: text })}
          placeholder="Type answer here"
          style={styles.answerInput}
          underlineColorAndroid="transparent"
          value={answerText}
        />
        <ReadingText>
          <ReadingText style={{ color: "#43a047" }}>
            {matchesArr.join(" ")}
          </ReadingText>
          {!matches ? (
            <ReadingText style={{ color: "#f44336" }}>{`${
              matchesArr.length ? " " : ""
            }${wrongWord}`}</ReadingText>
          ) : null}
        </ReadingText>
        {matchesArr.length < finalAnswerArr.length ? (
          <TouchableOpacity
            onPress={() => {
              this.setState({
                answerText: `${
                  matchesArr.length ? matchesArr.join(" ") + " " : ""
                }${finalAnswerArr[matchesArr.length]}`
              });
            }}
          >
            <AppText style={{ color: "#039be5" }}>Help</AppText>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }

  renderCatechismQuestion(question, index) {
    const {
      catechismShowAnswers,
      catechismShowSingleAnswer,
      catechismShowSingle,
      catechismViewMode
    } = this.state;

    let footnoteCount = { count: 0 };
    let belowFootnoteCount = { count: 0 };

    const answersContent = (
      <View>
        {isArray(question.answer[0])
          ? question.answer.map(section => {
              return this.renderParagraph(section, footnoteCount, index);
            })
          : this.renderParagraph(question.answer, footnoteCount, index)}
        {catechismViewMode === "below" && isArray(question.answer[0]) ? (
          <View style={{ marginTop: 10 }}>
            {question.answer.map((section, index1) => {
              return this.renderBelowScriptures(section, belowFootnoteCount);
            })}
          </View>
        ) : (
          <View style={{ marginTop: 15 }}>
            {catechismViewMode === "below"
              ? this.renderBelowScriptures(question.answer, belowFootnoteCount)
              : null}
          </View>
        )}
      </View>
    );

    let answersFinal;

    if (catechismShowSingle) {
      answersFinal = (
        <View>
          {catechismShowSingleAnswer
            ? answersContent
            : this.renderAnswerForm(question.answer)}
          <TouchableOpacity
            onPress={() =>
              this.setState({
                answerText: "",
                catechismShowSingleAnswer: !catechismShowSingleAnswer
              })
            }
          >
            <AppText
              semibold
              style={{ color: "#039be5", marginTop: 20, textAlign: "center" }}
            >
              {catechismShowSingleAnswer ? "Hide answer" : "Show answer"}
            </AppText>
          </TouchableOpacity>
        </View>
      );
    } else {
      answersFinal = catechismShowAnswers ? answersContent : null;
    }

    return (
      <View key={index} style={{ marginBottom: 25 }}>
        <ReadingText bold>
          {index + 1}.{" "}
          {isArray(question.question)
            ? this.renderParagraph(question.question, footnoteCount, index)
            : question.question}
        </ReadingText>
        {answersFinal}
      </View>
    );
  }

  renderCatechism() {
    const {
      catechismIndex,
      catechismShowSingle,
      document,
      onToggleSettings,
      showSettings
    } = this.state;

    if (document.type !== "catechism") {
      return null;
    }

    const singleCatechismQuestion = document.content[catechismIndex];

    return catechismShowSingle ? (
      <ScrollView
        onScrollBeginDrag={() =>
          showSettings ? onToggleSettings(false) : null
        }
        ref={readingView => (this.readingView = readingView)}
        style={styles.readingContainer}
      >
        <View style={{ paddingBottom: 100 }}>
          {this.renderCatechismSettings()}
          <View style={styles.paddingSides}>
            {this.renderCatechismNav()}

            <View style={styles.paddingSides}>
              {this.renderCatechismQuestion(
                singleCatechismQuestion,
                catechismIndex
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    ) : (
      <FlatList
        data={["settings", ...document.content]}
        keyExtractor={(item, index) => index.toString()}
        onScrollBeginDrag={() =>
          showSettings ? onToggleSettings(false) : null
        }
        renderItem={({ item, index }) => {
          if (item === "settings") {
            return this.renderCatechismSettings();
          } else {
            return (
              <View style={styles.paddingSides}>
                {this.renderCatechismQuestion(item, index - 1)}
              </View>
            );
          }
        }}
        style={styles.readingContainer}
      />
    );
  }

  renderTitleImage() {
    const { cccData, document } = this.state;

    let interactions = null;

    if (cccData) {
      const likes = find(
        cccData,
        item => item.slug === `likes-${this.props.document}`
      );

      if (likes) {
        interactions = (
          <View style={styles.interactions}>
            <TouchableOpacity
              onPress={() => {
                fetch("https://mcc-admin.herokuapp.com/ccc/addlike", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({ slug: this.props.document })
                }).then(() => {
                  this.getCCCData();
                });
              }}
            >
              <View style={[styles.interaction, { marginBottom: 20 }]}>
                <Icon.AntDesign name="like1" color="#039be5" size={25} />
                <AppText style={{ marginLeft: 10 }}>
                  {likes.likes} Likes
                </AppText>
              </View>
            </TouchableOpacity>
          </View>
        );
      }
    }

    return (
      <View style={{ position: "relative" }}>
        <Image
          resizeMode="cover"
          source={require("../assets/images/paper-background.jpg")}
          style={{
            width: Dimensions.get("window").width,
            height: 100,
            marginBottom: 20
          }}
        />
        <ReadingText
          style={{
            color: "#fff",
            fontSize: 20,
            position: "absolute",
            left: 0,
            paddingLeft: 30,
            paddingRight: 30,
            textAlign: "center",
            top: 25,
            width: Dimensions.get("window").width
          }}
        >
          The {document.title}
        </ReadingText>
        {interactions}
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
      topAnim
    } = this.state;
    const {
      onHandleSidebarDrag,
      onToggleSettings,
      selectedBackground,
      showSettings,
      showSidebar
    } = this.props;

    let finalContent;

    const creedConfessionContent = (
      <View style={{ paddingBottom: 60 }}>
        {this.renderTitleImage()}
        {document.type === "creed" && this.renderCreed()}
        {document.type === "confession" && this.renderConfession()}
      </View>
    );

    if (document.type === "creed" || document.type === "confession") {
      finalContent = (
        <ScrollView
          onScrollBeginDrag={() =>
            showSettings ? onToggleSettings(false) : null
          }
          ref={readingView => (this.readingView = readingView)}
          style={styles.readingContainer}
        >
          {showSettings ? (
            <TouchableWithoutFeedback onPress={() => onToggleSettings(false)}>
              {creedConfessionContent}
            </TouchableWithoutFeedback>
          ) : (
            <View style={{ paddingBottom: 25 }}>{creedConfessionContent}</View>
          )}
        </ScrollView>
      );
    } else if (document.type === "catechism") {
      finalContent = showSettings ? (
        <TouchableWithoutFeedback onPress={() => onToggleSettings(false)}>
          {this.renderCatechism()}
        </TouchableWithoutFeedback>
      ) : (
        this.renderCatechism()
      );
    }

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
        {this.renderModal()}
        <Sidebar
          catechismSectionIndex={catechismSectionIndex}
          confessionChapterIndex={confessionChapterIndex}
          documentData={document}
          setCatechismIndex={this.setCatechismIndex}
          setCatechismSectionIndex={this.setCatechismSectionIndex}
          setConfessionChapterIndex={this.setConfessionChapterIndex}
        />

        <View>
          <Animated.View
            onStartShouldSetResponder={() => showSidebar || modal}
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
          <Menu
            documentType={document.type}
            setCatechismIndex={this.setCatechismIndex}
            title={document.title}
          />
          {finalContent}
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
    paddingBottom: 20
  },
  paddingSides: {
    paddingLeft: 20,
    paddingRight: 20
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
    height: Dimensions.get("window").height - 128,
    left: 20,
    position: "absolute",
    top: 50,
    width: Dimensions.get("window").width - 40,
    zIndex: 3
  },
  switchers: {
    marginBottom: 10,
    marginLeft: "auto",
    marginRight: "auto"
  },
  switcher: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    marginBottom: 10
  },
  viewMode: {
    backgroundColor: "#f5f5f5",
    borderColor: "#bdbdbd",
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5
  },
  viewModeActive: {
    borderColor: "#039be5"
  },
  paragraph: {
    marginBottom: 25
  },
  indent: {
    marginLeft: 20
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
  },
  interactions: {
    alignItems: "center",
    display: "flex",
    marginBottom: 20
  },
  interaction: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row"
  },
  comments: {
    borderColor: "rgba(0, 0, 0, .84)",
    borderWidth: 1,
    marginBottom: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10
  },
  commentInput: {
    borderColor: "rgba(0, 0, 0, .84)",
    borderWidth: 1,
    marginBottom: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5
  },
  answerInput: {
    borderColor: "rgba(0, 0, 0, .84)",
    borderWidth: 1,
    marginTop: 20,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5
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
