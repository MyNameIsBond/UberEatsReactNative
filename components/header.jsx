import { StatusBar } from "expo-status-bar"
import React from "react"
import Icon from "react-native-vector-icons/Ionicons"
import { StyleSheet, Text, View, TextInput } from "react-native"
// import BottomSheet from "reanimated-bottom-sheet"

const Header = () => {
  return (
    <View style={style.header}>
      <Icon
        name="ios-location"
        style={{ alignContent: "center" }}
        size={25}
        color="#000"
      />
      <View style={style.now}>
        <Icon name="ios-location" size={20} color="#000" />
        <Text style={{ paddingLeft: 5 }}>Now</Text>
        <Icon name="ios-arrow-left" size={20} color="#000" />
      </View>
    </View>
  )
}

const spacing = {
  padding: 10,
  margin: 10,
  borderRadius: 100,
}

const style = StyleSheet.create({
  header: {
    backgroundColor: "lightgrey",
    flexDirection: "row",
    padding: spacing.padding,
    margin: spacing.margin,
    borderRadius: spacing.borderRadius,
    justifyContent: "space-between",
    alignContent: "center",
  },
  now: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
    borderRadius: spacing.borderRadius,
    alignContent: "center",
  },
})

export default Header
