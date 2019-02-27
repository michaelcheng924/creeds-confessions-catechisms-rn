import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Font, StoreReview } from "expo";
import { delay } from 'lodash';

import reducer from "./reducer";

import StatusBarBackground from "./components/StatusBarBackground";
import DocumentsList from "./components/DocumentsList";
import Reading from "./components/Reading";
import Search from "./components/Search";
import Settings from "./components/Settings";

const store = createStore(
  reducer,
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  componentDidMount() {
    if (StoreReview.isSupported()) {
      delay(() => {
        StoreReview.requestReview()
      }, 86400 * 1000)
    }
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <StatusBar barStyle="light-content" />
          <StatusBarBackground />
          <View style={styles.container}>
            <DocumentsList />
            <Reading />
            <Search />
            <Settings />
          </View>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      // Asset.loadAsync([
      //   // require("./assets/line-height-0.png")
      //   require("./assets/line-height-1.svg")
      //   // require("./assets/line-height-2.png")
      // ]),
      Font.loadAsync({
        "proxima-nova": require("./assets/fonts/proxima-nova-regular.ttf"),
        "proxima-nova-bold": require("./assets/fonts/proxima-nova-bold.otf"),
        "proxima-nova-italic": require("./assets/fonts/proxima-nova-italic.otf"),
        "proxima-nova-semibold": require("./assets/fonts/proxima-nova-semibold.otf"),
        baskerville: require("./assets/fonts/baskerville-regular.ttf"),
        "baskerville-bold": require("./assets/fonts/baskerville-bold.otf"),
        "baskerville-italic": require("./assets/fonts/baskerville-italic.ttf"),
        bookerly: require("./assets/fonts/bookerly-regular.ttf"),
        "bookerly-bold": require("./assets/fonts/bookerly-bold.ttf"),
        "bookerly-italic": require("./assets/fonts/bookerly-italic.ttf"),
        georgia: require("./assets/fonts/georgia-regular.ttf"),
        "georgia-bold": require("./assets/fonts/georgia-bold.ttf"),
        "georgia-italic": require("./assets/fonts/georgia-italic.ttf"),
        "open-sans": require("./assets/fonts/open-sans-regular.ttf"),
        "open-sans-bold": require("./assets/fonts/open-sans-bold.ttf"),
        "open-sans-italic": require("./assets/fonts/open-sans-italic.ttf"),
        palatino: require("./assets/fonts/palatino-regular.ttf"),
        "palatino-bold": require("./assets/fonts/palatino-bold.ttf"),
        "palatino-italic": require("./assets/fonts/palatino-italic.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative"
  }
});
