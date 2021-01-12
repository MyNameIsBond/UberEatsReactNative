import { StatusBar } from "expo-status-bar"
import React from "react"
import Icon from "react-native-vector-icons/Ionicons"
import { StyleSheet, Text, View, TextInput, drop } from "react-native"

const Header = () => {
  return (
    <View style={style.header}>
      <Icon name="ios-search" size={20} color="#000" />
      <TextInput style={style.input}>
        <Icon name="ios-location" size={25} color="#000" />
      </TextInput>
    </View>
  )
}

const style = StyleSheet.create({
  input: {
    backgroundColor: "lightgrey",
    padding: 10,
    borderRadius: 100,
  },
  header: {
    flex: 1,
    padding: 20,
    margin: 20,
  },
})

export default Header
