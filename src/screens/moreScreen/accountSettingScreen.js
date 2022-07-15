import React, { useEffect, useState } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { StyleSheet, View, Text, StatusBar, SafeAreaView } from "react-native";
import {db} from "../../../firebase";

export function AccountSettingsScreen({ navigation, props }) {

  
  db.collection("users").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#202123"} />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          minHeight: verticalScale(50),
          backgroundColor: "#202123",
        }}
      >
        <Text
          style={{
            fontSize: scale(20),
            color: "#fff",
            fontWeight: "bold",
            marginLeft: scale(15),
            marginVertical: verticalScale(15),
          }}
        >
          Account Settings
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#26272b",
  },
});
