import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Modal,
  Touchable,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "react-native";
import * as icons from "@expo/vector-icons";
import { fetchVideoId } from "../../../redux/actions/video.id.actions";
import { deleteVideoId } from "../../../redux/actions/video.id.actions";
import { fetchSerieId } from "../../../redux/actions";
import { deleteSerieId } from "../../../redux/actions";
import { fetchVideoRelated } from "../../../redux/actions";
import { PopularComponent } from "../../../components/popular.movies";
import { deleteVideoRelated } from "../../../redux/actions";
import { db } from "../../../../firebase";
import { Video } from "../../../components/video.player";

export default function DetailScreen({ route, navigation }) {
  const {
    id,
    original_title,
    name,
    backdrop_path,
    poster_path,
    overview,
    release_date,
    first_air_date,
  } = route.params;

  const [playing, setPlaying] = useState(false);
  const [youtubeKey, setYoutubeKey] = useState([]);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideoId(id));
    dispatch(fetchSerieId(id));
    dispatch(fetchVideoRelated(id));
  getUserName();
  }, []);
  
  const { video_id, error } = useSelector((state) => state.VideoId);
  const { serie_id } = useSelector((state) => state.SeriesVideo);
  const { video_related } = useSelector((state) => state.Related);

  console.log(id);
  
  const youtubeSerieKey = serie_id?.filter((serie) =>
    serie.name.includes("Trailer")
  );

  const videoKey = Object.values(youtubeSerieKey)[0];

  function playStop() {
    setPlaying(!playing);
    setYoutubeKey(
      video_id?.filter((video) => video.name === "Official Trailer")
    );
  }

  function leaveScreen() {
    dispatch(deleteVideoId());
    dispatch(deleteSerieId());
    dispatch(deleteVideoRelated());
    navigation.goBack();
  }
  
  console.log("Account Settings Screen");
  const getUserName = async () => {
    const docRef = db.collection("users").doc("fnG9vqQHCksTAfW9Nx8K");
    const userData = await docRef.get();
    console.log(userData.data());
  };


  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#26272b",
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}` }}
          style={{ width: "100%", height: 250 }}
          blurRadius={3}
        />
        <TouchableOpacity
          onPress={() => leaveScreen()}
          style={{ position: "absolute", top: 5, left: 15 }}
        >
          <icons.Ionicons name="arrow-back-outline" size={26} color="#fed130" />
        </TouchableOpacity>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${poster_path}`,
          }}
          style={{
            position: "absolute",
            width: 150,
            height: 250,
            top: 60,
            left: "30%",
          }}
        />

        {youtubeKey !== 0 ? (
          <View
            style={{
              position: "absolute",
              top: 15,
              left: 0,
              width: "100%",
              maxHeight: 290,
            }}
          >
            {playing ? (
              <View
                style={{
                  position: "absolute",
                  top: 40,
                  width: "100%",
                  height: 290,
                }}
              >
                {youtubeKey?.map((video, index) => {
                  return <Video key={index} movie={video.key} />;
                })}
              </View>
            ) : null}
          </View>
        ) : null}

        {youtubeSerieKey.length !== 0 ? (
          <View
            style={{
              position: "absolute",
              top: 15,
              left: 0,
              width: "100%",
              maxHeight: 290,
            }}
          >
            {playing ? (
              <View
                style={{
                  position: "absolute",
                  top: 40,
                  width: "100%",
                  height: 290,
                }}
              >
                {videoKey.length !== 0 ? (
                  <Video movie={videoKey["key"]} />
                ) : null}
              </View>
            ) : null}
          </View>
        ) : null}

        <Text
          style={{
            color: "#fff",
            paddingTop: 100,
            fontSize: 20,
            fontWeight: "900",
            textAlign: "center",
            // marginVertical: 20,
          }}
        >
          {original_title || name}
        </Text>
        <Text style={{ color: "grey", paddingTop: 5 }}>
          {release_date || first_air_date}
        </Text>
        <TouchableOpacity
          onPress={() => playStop()}
          style={{
            flexDirection: "row",
            height: 40,
            minWidth: 340,
            backgroundColor: "#fed130",
            marginHorizontal: 20,
            marginVertical: 15,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {playing ? (
            <icons.FontAwesome5 name="stop-circle" size={16} color="black" />
          ) : (
            <icons.Feather name="play" size={16} color="black" />
          )}
          <Text style={{ paddingHorizontal: 5 }}>
            {playing ? "Stop" : "Play"}
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              height: 40,
              width: 150,
              backgroundColor: "#26272b",
              borderWidth: 1,
              borderColor: "#000",
              marginHorizontal: 20,
              marginVertical: 15,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <icons.AntDesign name="plus" size={16} color="#fed130" />
            <Text style={{ paddingHorizontal: 5, color: "#fff" }}>My List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              height: 40,
              width: 150,
              backgroundColor: "#26272b",
              marginHorizontal: 20,
              marginVertical: 15,
              borderWidth: 1,
              borderColor: "#000",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <icons.Feather name="download" size={16} color="#fed130" />
            <Text style={{ paddingHorizontal: 5, color: "#fff" }}>
              Download
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: "#fff", marginHorizontal: 30 }}>{overview}</Text>
        <Text
          style={{
            fontSize: 15,
            color: "#fff",
            fontWeight: "bold",
            marginVertical: 10,
          }}
        >
          Similar Movies
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginVertical: 15 }}
        >
          {video_related?.map((related, index) => {
            return (
              <PopularComponent
                key={index}
                popTitle={related.title}
                popImage={related.backdrop_path}
                popDetails={related.overview}
                navigation={() => {
                  navigation.push("DetailScreen", related);
                }}
              />
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
