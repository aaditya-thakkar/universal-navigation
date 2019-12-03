import React, { Component } from "react";
import { View } from "react-native";
import { ModalContainer } from "react-router-modal";
import { BrowserRouter as Router } from "react-router-dom";

import HomeScreen from "../../components/HomeScreen";
import SecondScreen from "../../components/SecondScreen";
import UserScreen from "../../components/UserScreen";
import ModalScreen from "../../components/DasModalScreen";
import MembersScreen from "../../components/MembersScreen";
import SamScreen from "../../components/SAMScreen";
import WebRouterBuilder from "./Router/RouterBuilder";
import TopNav from "./TopNav";

const routeMap = {
  Home: {
    component: HomeScreen,
    path: "/",
    exact: true
  },
  Settings: {
    component: SecondScreen,
    path: "/settings"
  },
  Members: {
    component: MembersScreen,
    path: "/members",
    childRoutes: {
      User: {
        component: UserScreen,
        path: "/members/:name",
        exact: true
      },
    }
  },
  SAM: {
    component: SamScreen,
    path: "/sam"
  },
  ModalPage: {
    component: ModalScreen,
    path: "*/modal",
    modal: true
  }
};

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
