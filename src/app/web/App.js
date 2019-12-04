import React, { Component } from "react";
import { View } from "react-native";
import { ModalContainer } from "react-router-modal";
import { BrowserRouter as Router } from "react-router-dom";

import WebRouterBuilder from "./Router/RouterBuilder";
import routeMap from "./Router/routes";
import TopNav from "./TopNav";

class App extends Component {
  render() {
    return (
      <Router>
        <View style={{ height: "100vh", width: "100vw" }}>
          <TopNav />
          {WebRouterBuilder({ routeMap })}
          <ModalContainer />
        </View>
      </Router>
    );
  }
}

export default App;
