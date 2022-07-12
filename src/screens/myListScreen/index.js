import { TouchableOpacity, SafeAreaView, Image, View, Text } from 'react-native';
import { ScaledSheet, scale, verticalScale } from 'react-native-size-matters';

export   function MyListScreen ({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View
          style={{
            minHeight: verticalScale(70),
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
            My List
          </Text>
        </View>
      <Image
        style={styles.image}
        source={require("../../../assets/images/mylist.jpg")}
      />
      <Text style={styles.title}>Create my own list</Text>
      <Text style={styles.text}>
        Let's do something, because I have a nice surprise for you
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.signUpButton1}>
        <Text>Explore Movies</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    backgroundColor: "#26272b",
  },
  image: {
    minWidth: "200@s",
    minHeight: "200@vs",
    marginVertical: "45@vs",
    marginLeft: "60@s",
  },
  title: {
    fontSize: "20@s",
    alignSelf: "center",
    fontWeight: "bold",
    color: "#fff",
    marginTop: "-30@vs",
  },
  text: {
    color: "gray",
    fontSize: "15@s",
    textAlign: "center",
    marginHorizontal: "70@s",
    marginBottom: "40@vs",
  },
  signUpButton1: {
    height: "40@vs",
    backgroundColor: "#fed130",
    marginHorizontal: "20@s",
    marginVertical: "90@vs",
    borderRadius: "5@s",
    justifyContent: "center",
    alignItems: "center",
  },
});
