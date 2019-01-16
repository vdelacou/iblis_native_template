import React, { PureComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";

/**
 * The Details screen
 */
export class DetailScreen extends PureComponent<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Details Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
