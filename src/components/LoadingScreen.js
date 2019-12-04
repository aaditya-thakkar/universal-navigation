import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const LoadingScreen = (props) => {
  return props.pastDelay ? (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
});

export default LoadingScreen;
