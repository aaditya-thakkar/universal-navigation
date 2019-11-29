import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SecondScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hi! Second Screen reporting for duty!</Text>
      <Button
        title="User #1"
        onPress={() => navigation.navigate("User", { name: "Princess Consuela Bananahammock" })}
      />
      <Button
        title="User #2"
        onPress={() =>
          navigation.navigate("User", { name: "Crap Bag" })
        }
      />
      <Button
        title="Open Modal"
        onPress={() => navigation.navigate("ModalPage")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default SecondScreen;
