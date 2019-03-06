import React from "react";
import { connect } from "react-redux";
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import AppText from "./AppText";
import Icon from "@expo/vector-icons";

import { setDocument } from "../actions";

import { documents, documentsFlat } from "../constants/documents";

const sortOptions = [
  {
    label: "Relevance",
    value: "relevance"
  },
  {
    label: "Type",
    value: "type"
  },
  {
    label: "Name",
    value: "name"
  },
  {
    label: "Date",
    value: "date"
  }
];

class DocumentsList extends React.Component {
  state = {
    sortOption: "relevance"
  };

  renderRelevance() {
    return (
      <View>
        <View style={[styles.documentRow, styles.documentRowHeading]}>
          <AppText semibold style={styles.documentRowHeadingText}>
            Popular confessions (with interactive inline Scripture references)
          </AppText>
        </View>
        <View style={styles.documentButtons}>
          <TouchableOpacity
            onPress={() => this.props.onSetDocument("westminster")}
          >
            <View
              style={[styles.documentButton, { backgroundColor: "#1e88e5" }]}
            >
              <Icon.Entypo color="#fff" name="water" size={25} />
              <AppText style={[styles.documentButtonText]}>
                Westminster Confession of Faith
              </AppText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.onSetDocument("london-baptist")}
          >
            <View
              style={[
                styles.documentButton,
                { backgroundColor: "#d81b60", marginBottom: 20 }
              ]}
            >
              <Icon.MaterialCommunityIcons
                color="#fff"
                name="cup-water"
                size={25}
              />
              <AppText style={[styles.documentButtonText]}>
                1689 London Baptist Confession of Faith
              </AppText>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.documentRow, styles.documentRowHeading]}>
          <AppText semibold style={styles.documentRowHeadingText}>
            Popular catechisms (with interactive options)
          </AppText>
        </View>
        <View style={styles.documentButtons}>
          <TouchableOpacity
            onPress={() => this.props.onSetDocument("westminster-shorter")}
          >
            <View
              style={[styles.documentButton, { backgroundColor: "#1e88e5" }]}
            >
              <Icon.Entypo color="#fff" name="water" size={25} />
              <AppText style={[styles.documentButtonText]}>
                Westminster Shorter Catechism
              </AppText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.onSetDocument("boys-girls")}
          >
            <View
              style={[
                styles.documentButton,
                { backgroundColor: "#d81b60", marginBottom: 20 }
              ]}
            >
              <Icon.MaterialCommunityIcons
                color="#fff"
                name="cup-water"
                size={25}
              />
              <AppText style={[styles.documentButtonText]}>
                Catechism for Boys and Girls
              </AppText>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.documentRow, styles.documentRowHeading]}>
          <AppText semibold style={styles.documentRowHeadingText}>
            Other catechisms
          </AppText>
        </View>
        <TouchableOpacity
          onPress={() => this.props.onSetDocument("heidelberg-catechism")}
        >
          <View style={styles.documentRow}>
            <AppText style={styles.documentRowText}>
              Heidelberg Catechism
            </AppText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.onSetDocument("westminster-larger")}
        >
          <View style={styles.documentRow}>
            <AppText style={styles.documentRowText}>
              Westminster Larger Catechism
            </AppText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.onSetDocument("baptist-catechism")}
        >
          <View style={styles.documentRow}>
            <AppText style={styles.documentRowText}>Baptist Catechism</AppText>
          </View>
        </TouchableOpacity>
        <View style={[styles.documentRow, styles.documentRowHeading]}>
          <AppText semibold style={styles.documentRowHeadingText}>
            Other confessions
          </AppText>
        </View>
        <TouchableOpacity
          onPress={() => this.props.onSetDocument("belgic-confession")}
        >
          <View style={styles.documentRow}>
            <AppText style={styles.documentRowText}>Belgic Confession</AppText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.onSetDocument("canons-dort")}
        >
          <View style={styles.documentRow}>
            <AppText style={styles.documentRowText}>Canons of Dort</AppText>
          </View>
        </TouchableOpacity>
        <View style={[styles.documentRow, styles.documentRowHeading]}>
          <AppText semibold style={styles.documentRowHeadingText}>
            Creeds
          </AppText>
        </View>
        {documents[0].items.map(document => {
          return (
            <TouchableOpacity
              key={document.slug}
              onPress={() => this.props.onSetDocument(document.slug)}
            >
              <View style={styles.documentRow}>
                <AppText style={styles.documentRowText}>
                  {document.title} ({document.date})
                </AppText>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  renderType() {
    return (
      <View>
        {documents.map(category => {
          return (
            <View key={category.title}>
              <View style={[styles.documentRow, styles.documentRowHeading]}>
                <AppText semibold style={styles.documentRowHeadingText}>
                  {category.title}
                </AppText>
              </View>
              {category.items.map(document => {
                return (
                  <TouchableOpacity
                    key={document.slug}
                    onPress={() => this.props.onSetDocument(document.slug)}
                  >
                    <View style={styles.documentRow}>
                      <AppText style={styles.documentRowText}>
                        {document.title} ({document.date})
                      </AppText>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
      </View>
    );
  }

  renderName() {
    const sortedDocuments = documentsFlat.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });

    return (
      <View>
        {sortedDocuments.map(document => {
          return (
            <TouchableOpacity
              key={document.slug}
              onPress={() => this.props.onSetDocument(document.slug)}
            >
              <View style={styles.documentRow}>
                <AppText style={styles.documentRowText}>
                  {document.title} ({document.date})
                </AppText>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  renderDate() {
    const sortedDocuments = documentsFlat.sort((a, b) => {
      return a.dateNum - b.dateNum;
    });

    return (
      <View>
        {sortedDocuments.map(document => {
          return (
            <TouchableOpacity
              key={document.slug}
              onPress={() => this.props.onSetDocument(document.slug)}
            >
              <View style={styles.documentRow}>
                <AppText
                  style={[styles.documentRowText, styles.documentRowTextDate]}
                >
                  {document.date}
                </AppText>
                <AppText
                  style={[
                    styles.documentRowText,
                    {
                      flexShrink: 1
                    }
                  ]}
                >
                  {document.title}
                </AppText>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  render() {
    const { sortOption } = this.state;

    return (
      <ScrollView>
        <View style={styles.sort}>
          <AppText semibold style={[styles.sortOption, styles.sortOptionLabel]}>
            Sort by:
          </AppText>
          {sortOptions.map(option => {
            const style = [styles.sortOption];
            const isActive = sortOption === option.value;

            if (isActive) {
              style.push(styles.sortOptionActive);
            }

            return (
              <TouchableOpacity
                key={option.value}
                onPress={() => this.setState({ sortOption: option.value })}
              >
                <AppText bold={isActive} style={style}>
                  {option.label}
                </AppText>
              </TouchableOpacity>
            );
          })}
        </View>
        {sortOption === "relevance" && this.renderRelevance()}
        {sortOption === "type" && this.renderType()}
        {sortOption === "name" && this.renderName()}
        {sortOption === "date" && this.renderDate()}
        <TouchableOpacity
          onPress={() => Linking.openURL("https://bibleanswers.io")}
        >
          <View style={styles.logoRow}>
            <Image source={require("../assets/images/logo-nav.png")} />
            <AppText style={{ color: "#039be5", marginLeft: 10 }}>
              bibleanswers.io
            </AppText>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  sort: {
    borderBottomColor: "#757575",
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  sortOption: {
    color: "#757575",
    marginRight: 40,
    marginTop: 10
  },
  sortOptionActive: {
    color: "rgba(0, 0, 0, .84)"
  },
  sortOptionLabel: {
    color: "#757575"
  },
  documentRow: {
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10
  },
  documentRowHeading: {
    backgroundColor: "#eeeeee",
    borderBottomColor: "rgba(0, 0, 0, .84)",
    borderBottomWidth: 1,
    borderTopColor: "rgba(0, 0, 0, .84)",
    borderTopWidth: 1
  },
  documentRowTextDate: {
    width: 100
  },
  documentRowHeadingText: {
    fontSize: 22
  },
  documentButtons: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  documentButton: {
    alignItems: "center",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    width: 300
  },
  documentButtonText: {
    color: "#fff",
    flexShrink: 1,
    fontSize: 24,
    marginLeft: 10
  },
  logoRow: {
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#757575",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10
  }
});

const mapDispatchToProps = {
  onSetDocument: setDocument
};

export default connect(
  null,
  mapDispatchToProps
)(DocumentsList);
