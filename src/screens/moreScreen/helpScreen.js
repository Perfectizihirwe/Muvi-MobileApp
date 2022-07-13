import React, { useState } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export function HelpScreen({ navigation }) {
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
          Help Center
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
