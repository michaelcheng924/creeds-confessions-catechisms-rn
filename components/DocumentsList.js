import React from "react";
import { connect } from "react-redux";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import AppText from "./AppText";

import { setDocument } from "../actions";

import { documents, documentsFlat } from "../constants/documents";

const sortOptions = [
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
    sortOption: "type"
  };

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
                        {document.title}
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
                  {document.title}
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
                <AppText
                  bold={isActive}
                  style={style}
                >
                  {option.label}
                </AppText>
              </TouchableOpacity>
            );
          })}
        </View>
        {sortOption === "type" && this.renderType()}
        {sortOption === "name" && this.renderName()}
        {sortOption === "date" && this.renderDate()}
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
    justifyContent: "center",
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10
  },
  sortOption: {
    color: "#757575",
    marginRight: 40
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
  }
});

const mapDispatchToProps = {
  onSetDocument: setDocument
};

export default connect(
  null,
  mapDispatchToProps
)(DocumentsList);
