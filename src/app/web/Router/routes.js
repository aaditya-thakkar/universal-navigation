import Loadable from 'react-loadable';

import HomeScreen from "../../../components/HomeScreen";
import LoadingScreen from "../../../components/LoadingScreen";

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
    component: Loadable({
      loader: () => import('../../../components/SecondScreen'),
      loading: LoadingScreen,
    }),
    path: routesVsPathMap[ROUTES_MAP.Settings],
  },
  [ROUTES_MAP.Members]: {
    component: Loadable({
      loader: () => import('../../../components/MembersScreen'),
      loading: LoadingScreen,
    }),
    path: routesVsPathMap[ROUTES_MAP.Members],
    childRoutes: {
      [ROUTES_MAP.User]: {
        component: Loadable({
          loader: () => import('../../../components/UserScreen'),
          loading: LoadingScreen,
        }),
        path: routesVsPathMap[ROUTES_MAP.User],
        exact: true
      },
    }
  },
  [ROUTES_MAP.SAM]: {
    component: Loadable({
      loader: () => import('../../../components/SAMScreen'),
      loading: LoadingScreen,
    }),
    path: routesVsPathMap[ROUTES_MAP.SAM]
  },
  [ROUTES_MAP.ModalPage]: {
    component:  Loadable({
      loader: () => import('../../../components/DasModalScreen'),
      loading: LoadingScreen,
    }),
    path: routesVsPathMap[ROUTES_MAP.ModalPage],
    modal: true
  }
};
