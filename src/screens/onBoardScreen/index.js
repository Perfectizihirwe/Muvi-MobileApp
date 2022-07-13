import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  StatusBar,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet } from "react-native-size-matters";

export function OnBoardScreen({ navigation }) {
  const RenderItem = ({ item }) => {
    return (
      <View>
        <StatusBar hidden={false} />
        <ImageBackground style={styles.backImage} source={item.image}>
          <Text style={styles.introTitle}>{item.title}</Text>
          <Text style={styles.introText}>{item.text}</Text>
          <TouchableOpacity
            onPress={() => navigation.replace("Welcome")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  };

  return (
    <>
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        showDoneButton={false}
        showNextButton={false}
        showPrevButton={false}
        showSkipButton={false}
        dotStyle={styles.slidingDots}
        activeDotStyle={styles.slidingDotsActive}
      />
    </>
  );
}


const styles = ScaledSheet.create({
  backImage: {
    width: "350@s",
    height: "100%",
    justifyContent: "center",
  },
  introTitle: {
    fontSize: "25@s",
    fontWeight: "bold",
    color: "#fff",
    marginTop: "80@vs",
    marginHorizontal: "20@s",
    lineHeight: "35@vs",
  },
  introText: {
    fontSize: "15@s",
    color: "#fff",
    marginVertical: "20@vs",
    marginHorizontal: "20@s",
    lineHeight: "25@vs",
  },
  button: {
    top: "150@vs",
    left: "3@s",
    backgroundColor: "#fed130",
    height: "40@vs",
    marginHorizontal: "20@s",
    borderRadius: "5@s",
    justifyContent: "center",
    alignItems: "center",
  },
  slidingDots: {
    marginBottom: "350@vs",
    backgroundColor: "gray",
    width: "20@vs",
    height: "5@vs",
    left: "-110@s",
  },
  slidingDotsActive: {
    marginBottom: "350@vs",
    backgroundColor: "#fed130",
    width: "30@s",
    height: "5@vs",
    left: "-110@s",
  },
});

const slides = [
  {
    key: "s1",
    title: "Enjoy your favourite movie anywhere",
    text: "Browse through our collections and discover hundreds of movies and series that you'll love.",
    image: require("../../../assets/images/slide1.jpg"),
  },
  {
    key: "s2",
    title: "Largest collection of movies on the internet",
    text: "We use the largest movie database on the internet, you'll never miss your fav show.",
    image: require("../../../assets/images/slide2.png"),
  },
  {
    key: "s3",
    title: "Trending Movies right at your doorstep",
    text: "You are greeted by trending movies to keep you up to date with your friends going to cinema.",
    image: require("../../../assets/images/slide3.png"),
  },
];
