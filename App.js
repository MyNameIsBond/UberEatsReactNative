import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View, SafeAreaView } from "react-native"
import Header from "./components/header"

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header />
      <StatusBar style="auto" />
      <Text> Open up App.js to start working on your app! </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
  },
})
