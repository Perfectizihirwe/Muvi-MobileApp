import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { BarIndicator } from "react-native-indicators";
import React, { useState } from "react";
import { searchAnything } from "../../redux/actions/search.actions";
import * as icons from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { SearchComponent } from "../../components/search.results";
import { ScaledSheet} from "react-native-size-matters";

export function SearchScreen(props) {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const { search_results, searching_done } = useSelector(
    (state) => state.Search
  );

  const pressSearch = () => {
    dispatch(searchAnything(keyword));
  };

  const placeHolderText = "Search any movie or actor";

  if (keyword !== "") {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'#202123'} hidden={false} />
        <View style={styles.inputarea}>
          <TextInput
            style={styles.input}
            placeholder={placeHolderText}
            placeholderTextColor={"gray"}
            value={keyword}
            onChangeText={(text) => setKeyword(text)}
            onChange={pressSearch}
          />
        </View>
        <TouchableOpacity
          value={keyword}
          onChangeText={(text) => setKeyword(text)}
          onPress={pressSearch}
          style={styles.searchicon}
        >
          <icons.Feather name="search" size={25} color="gray" />
        </TouchableOpacity>
        {searching_done ? (
          <ScrollView vertical showsHorizontalScrollIndicator={false}>
            {search_results?.map((search, index) => {
              return (
                <SearchComponent
                  key={index}
                  searchImage={
                    search.backdrop_path ||
                    search.poster_path ||
                    search.profile_path
                  }
                  searchTitle={
                    search.original_name || search.original_title || search.name
                  }
                  searchDate={search.overview}
                  navigation={() => {
                    props.navigation.navigate("DetailScreen", search);
                  }}
                />
              );
            })}
          </ScrollView>
        ) : (
          <View style={styles.indicator}>
            <BarIndicator color="#fed130" />
          </View>
        )}
      </SafeAreaView>
    );
  } else {
    return (
        <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={"#202123"} hidden={false} />
        <View style={styles.inputarea}>
          <TextInput
            style={styles.input}
            placeholder="Search any movie or actor"
            placeholderTextColor={"gray"}
            value={keyword}
            onChangeText={(text) => setKeyword(text)}
            onChange={pressSearch}
          />
        </View>
        <TouchableOpacity
          value={keyword}
          onChangeText={(text) => setKeyword(text)}
          onPress={pressSearch}
          style={styles.searchicon}
        >
          <icons.Feather name="search" size={25} color="gray" />
        </TouchableOpacity>
        <View>
          <Image
            style={styles.image}
            source={require("../../../assets/images/search.jpg")}
          />
          <Text style={styles.title}>Search any movie</Text>
          <Text style={styles.text}>
            Explore our libraries and enjoy movies with your family
          </Text>
        </View>
      </SafeAreaView>
    );
  }
  
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26272b",
  },
  inputarea: {
    minHeight: "70@vs",
    backgroundColor: "#202123",
  },
  input: {
    flexDirection: "column",
    backgroundColor: "#26272b",
    color: "#fff",
    minHeight: "40@vs",
    borderRadius: "8@s",
    marginVertical: "15@vs",
    marginHorizontal: "15@s",
    paddingHorizontal: "10@s",
  },
  searchicon: {
    position: "absolute",
    top: "22@vs",
    left: "300@s",
  },
  image: {
    maxWidth: "400@s",
    maxHeight: "300@vs",
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
  },
  indicator: {
    flex: 1,
  },
});
