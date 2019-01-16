import React, { PureComponent } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { AdMobInterstitial } from "react-native-admob";
import { NavigationScreenProps } from "react-navigation";

/**
 * The Details screen
 */
export class DetailScreen extends PureComponent<NavigationScreenProps> {
  render() {
    AdMobInterstitial.setAdUnitID("ca-app-pub-3940256099942544/1033173712");
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.requestAd().then(
      () => AdMobInterstitial.showAd(),
      (error: { code: string; error: string }) =>
        Alert.alert(JSON.stringify(error))
    );

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
