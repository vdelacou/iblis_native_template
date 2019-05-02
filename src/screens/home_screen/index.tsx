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
 * The Home screen
 */
export const HomeScreen: NavigationScreenComponent<{}> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
};

// screen navigation options
HomeScreen.navigationOptions = (
  screenProps: NavigationScreenProps
): NavigationStackScreenOptions => {
  // Navigate to details view
  const buttonRightPress = () => {
    screenProps.navigation.navigate(ROUTES.MainDetails);
  };
  // Open modal view
  const buttonleftPress = () => {
    screenProps.navigation.navigate(ROUTES.ModalMain);
  };

  return {
    headerStyle: {
      elevation: 0,
      backgroundColor: "darkslategray"
    },
    headerLeft: (
      <Icon.Button
        name="menu"
        backgroundColor="transparent"
        underlayColor="transparent"
        color="wheat"
        onPress={buttonleftPress}
      />
    ),
    headerRight: (
      <Icon.Button
        name="apps"
        backgroundColor="transparent"
        underlayColor="transparent"
        color="wheat"
        onPress={buttonRightPress}
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
