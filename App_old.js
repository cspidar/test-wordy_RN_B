import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { WebView } from "react-native-webview";
import * as SplashScreen from "expo-splash-screen";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delay_splash() {
  await SplashScreen.preventAutoHideAsync();
  await sleep(2000);
  await SplashScreen.hideAsync();
}

export default function App() {
  delay_splash();
  return (
    <SafeAreaView
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <StatusBar style="auto" />
      <WebView
        style={styles.container}
        source={{ uri: "https://cspidar.github.io/movword/" }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: getStatusBarHeight(),
  },
});
