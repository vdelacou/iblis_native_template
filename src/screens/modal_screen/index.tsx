import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  NavigationScreenComponent,
  NavigationScreenProps,
  NavigationStackScreenOptions
} from "react-navigation";
import { ROUTES } from "../../routes";

/**
 * The Modal screen
 */
export const ModalScreen: NavigationScreenComponent<{}> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal Screen</Text>
    </View>
  );
};

// screen navigation options
ModalScreen.navigationOptions = (
  screenProps: NavigationScreenProps
): NavigationStackScreenOptions => {
  // Close Modal
  const buttonleftPress = () => {
    screenProps.navigation.navigate(ROUTES.RootMain);
  };

  return {
    headerStyle: {
      elevation: 0,
      backgroundColor: "#F5FCFF"
    },
    headerLeft: (
      <Icon.Button
        name="close"
        backgroundColor="transparent"
        underlayColor="transparent"
        color="black"
        onPress={buttonleftPress}
      />
    )
  };
};

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
