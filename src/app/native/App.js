import React, { Component } from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "../../components/HomeScreen";
import PlannerScreen from "../../components/PlannerScreen";
import SAMScreen from "../../components/SAMScreen";
import DasModalScreen from "../../components/DasModalScreen";
import SecondScreen from "../../components/SecondScreen";
import UserScreen from "../../components/UserScreen";

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen, navigationOptions: { title: "Home" } }
});

const PlannerStack = createStackNavigator({
  Planner: { screen: PlannerScreen, navigationOptions: { title: "Planner" } }
});

const SamStack = createStackNavigator({
  SAM: { screen: SAMScreen, navigationOptions: { title: "Asset Manager" } }
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SecondScreen, navigationOptions: { title: "Settings" } },
  User: { screen: UserScreen, navigationOptions: { title: "User" } }
});

const TabNav = createBottomTabNavigator({
  Home: HomeStack,
  Planner: PlannerStack,
  SAM: SamStack,
  Settings: SettingsStack
});

const RootStack = createStackNavigator(
  {
    Main: TabNav,
    ModalPage: DasModalScreen
  },
  {mode: "modal", headerMode: "none"}
);

class App extends Component {
  render() {
    return <RootStack />;
  }
}

export default App;
