import HomeScreen from "../../../components/HomeScreen";
import SecondScreen from "../../../components/SecondScreen";
import MembersScreen from "../../../components/MembersScreen";
import UserScreen from "../../../components/UserScreen";
import SamScreen from "../../../components/SAMScreen";
import ModalScreen from "../../../components/DasModalScreen";

export const ROUTES_MAP = {
  Home: 'Home',
  Settings: 'Settings',
  Members: 'Members',
  User: 'User',
  SAM: 'SAM',
  ModalPage: 'ModalPage'
};

export const routesVsPathMap = {
  [ROUTES_MAP.Home]:  "/",
  [ROUTES_MAP.Settings]:  "/settings",
  [ROUTES_MAP.Members]:  "/members",
  [ROUTES_MAP.User]:  "/members/:name",
  [ROUTES_MAP.SAM]:  "/sam",
  [ROUTES_MAP.ModalPage]:  "*/modal",

};

export default {
  [ROUTES_MAP.Home]: {
    component: HomeScreen,
    path: routesVsPathMap[ROUTES_MAP.Home],
    exact: true
  },
  [ROUTES_MAP.Settings]: {
    component: SecondScreen,
    path: routesVsPathMap[ROUTES_MAP.Settings],
  },
  [ROUTES_MAP.Members]: {
    component: MembersScreen,
    path: routesVsPathMap[ROUTES_MAP.Members],
    childRoutes: {
      [ROUTES_MAP.User]: {
        component: UserScreen,
        path: routesVsPathMap[ROUTES_MAP.User],
        exact: true
      },
    }
  },
  [ROUTES_MAP.SAM]: {
    component: SamScreen,
    path: routesVsPathMap[ROUTES_MAP.SAM]
  },
  [ROUTES_MAP.ModalPage]: {
    component: ModalScreen,
    path: routesVsPathMap[ROUTES_MAP.ModalPage],
    modal: true
  }
};
