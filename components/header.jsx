import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View, TextInput } from "react-native"

const Header = () => {
  return (
    <View style={style.header}>
      <TextInput style={style.input}>D</TextInput>
    </View>
  )
}

const style = StyleSheet.create({
  input: {
    backgroundColor: "aliceblue",
  },
  header: {
    backgroundColor: "white",
    padding: 10,
  },
})

export default Header
