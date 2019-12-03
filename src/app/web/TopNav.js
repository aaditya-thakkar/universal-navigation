import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { withRouter } from "react-router-dom";

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "peach",
    height: 50,
  },
  text: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '600',
    color: 'black',
    paddingHorizontal: 20,
  }
});

export default withRouter(({ history }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.text} onPress={() => history.push("/")}>Home</Text>
      <Text style={styles.text} onPress={() => history.push("/members")}>Members</Text>
      <Text style={styles.text} onPress={() => history.push("/sam")}>Asset Manager</Text>
      <Text style={styles.text} onPress={() => history.push("/settings")}>Settings</Text>
    </View>
  );
});
