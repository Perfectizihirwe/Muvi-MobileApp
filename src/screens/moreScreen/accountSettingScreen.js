import React, { useEffect, useState } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { StyleSheet, View, Text, StatusBar, SafeAreaView } from "react-native";
import { db } from "../../../firebase";
import { get } from "react-native/Libraries/Utilities/PixelRatio";

export function AccountSettingsScreen({ navigation, props }) {
  console.log("Account Settings Screen");
  const getUserName = async() => {
    const userDocument = await db.collection("users").doc("fnG9vqQHCksTAfW9Nx8K").get();
    console.log(userDocument);
  }

  useEffect(() => {
    getUserName();
  },[])


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
