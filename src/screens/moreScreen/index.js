import React, { useState } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import {
  StyleSheet,
  Button,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from "react-native";
import * as icons from "@expo/vector-icons";
import Background from "../../../assets/images/Wirebackground.jpg";
import ProfilePicture from "../../../assets/images/profile.jpg";
import { MoreOptions } from "../../components/more.options";
import { auth } from "../../../firebase";
import { authLogout } from "../../redux/actions/auth.actions";
import { useDispatch } from "react-redux";

export function MoreScreen({ navigation }) {

  const dispatch = useDispatch();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(authLogout());
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const options = [
    {
      key: 1,
      icon: "user",
      title: "Account Settings",
      showArrow: true,
      specificAction: () => navigation.navigate("AccountSettings"),
    },
    {
      key: 2,
      icon: "settings",
      title: "App Settings",
      showArrow: true,
      specificAction: () => navigation.navigate("AppSettings"),
    },
    {
      key: 3,
      icon: "thumbs-up",
      title: "Rate us on AppStore",
      showArrow: true,
      specificAction: null,
    },
    {
      key: 4,
      icon: "alert-circle",
      title: "Help",
      showArrow: true,
      specificAction: () => navigation.navigate("Help"),
    },
    {
      key: 5,
      icon: "log-out",
      title: "Sign out",
      showArrow: false,
      specificAction: () => handleSignOut(),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Background}
        style={{ flex: 1, height: verticalScale(500) }}
      >
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
            More
          </Text>
          <TouchableOpacity
            style={{
              marginLeft: scale(250),
              marginVertical: verticalScale(20),
            }}
          >
            <icons.Feather name="inbox" size={scale(20)} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginVertical: verticalScale(30),
            alignSelf: "center",
          }}
        >
          <Image
            source={ProfilePicture}
            style={{
              borderRadius: scale(100),
              width: scale(130),
              height: verticalScale(150),
            }}
          />
        </View>
        <ScrollView
          style={{
            backgroundColor: "#26272b",
            borderRadius: scale(20),
            minHeight: verticalScale(300),
          }}
        >
          <Text
            style={{
              fontSize: scale(25),
              color: "#fff",
              fontWeight: "bold",
              marginTop: verticalScale(10),
              marginLeft: scale(15),
            }}
          >
            Hi, Joy Doreen👋
          </Text>
          <Text
            style={{
              fontSize: scale(12),
              color: "gray",
              marginLeft: scale(15),
            }}
          >
            30 movies in your list
          </Text>
          <View
            style={{
              backgroundColor: "gray",
              marginVertical: verticalScale(10),
              maxHeight: verticalScale(0.5),
              maxWidth: scale(500),
            }}
          >
            <Text></Text>
          </View>
          {options?.map(({ key, icon, title, showArrow, specificAction }) => {
            return (
              <MoreOptions
                key={key}
                icon={icon}
                title={title}
                showArrow={showArrow}
                action={specificAction}
              />
            );
          })}
        </ScrollView>
        <View style={{ flexDirection: "row" }}></View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26272b",
  },
});
