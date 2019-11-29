import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { ModalRoute } from "react-router-modal";
import "react-router-modal/css/react-router-modal.css";

function Wrapper({ element, history, match, routeMap, closeModal }) {
  const navigate = (to, params) => {
    let url = routeMap[to].path;
    // replace params ids in the url with actual values
    if (params && Object.keys(params).length > 0) {
      Object.keys(params).forEach(param => {
        const re = RegExp(`\:${param}\\??`);
        url = url.replace(re, escape(params[param]));
      });
    }
    // removing empty params from url - every string between /: and ?
    url = url.replace(/\/:(.*?)(?=\/|$)/g, "");
    history.push(url);
  };

  const getParam = (param, alternative) => {
    return match.params[param] || alternative;
  };

  const goBack = () => {
    history.goBack();
  };

  return React.cloneElement(element, {
    navigation: { navigate, getParam, goBack },
    closeModal
  });
}

const WebRouterBuilder = ({ routeMap }) => {
  return Object.values(routeMap).map((currentRoute) => {
    const Component = currentRoute.component;
    if (currentRoute.modal) {
      return (
        <ModalRoute
          key={currentRoute.path}
          path={currentRoute.path}
          component={props => (
            <Wrapper element={<Component />} {...props} routeMap={routeMap} />
          )}
        />
      );
    } else {
      return (
        <Route
          key={currentRoute.path}
          path={currentRoute.path}
          exact={currentRoute.exact}
          render={props => (
            <Wrapper element={<Component />} {...props} routeMap={routeMap} />
          )}
        />
      );
    }
  });
};

WebRouterBuilder.propTypes = {
  routeMap: PropTypes.object
};

export default WebRouterBuilder;
