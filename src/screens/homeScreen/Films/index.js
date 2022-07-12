import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { fetchPopularMovies } from "../../../redux/actions/popular.actions";
import { SeriesComponent } from "../../../components/series.component";
import { useDispatch, useSelector } from "react-redux";
import { SeriesSkeleton } from "../../../components/series.skeleton";

export function FilmsScreen(props) {
  const dispatch = useDispatch();
  const { popular_movies, popular_loading } = useSelector(
    (state) => state.Popular
  );
  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#26272b" }}>
      <Text
        style={{
          fontSize: scale(15),
          color: "#fff",
          fontWeight: "600",
          marginVertical: verticalScale(10),
          marginLeft: scale(15),
        }}
      >
        Browse films
      </Text>
      {popular_loading && <SeriesSkeleton />}
      <ScrollView vertical showsHorizontalScrollIndicator={false}>
        {popular_movies?.map((series, index) => {
          return (
            <SeriesComponent
              key={index}
              seriesImage={series.backdrop_path || series.poster_path}
              seriesTitle={series.original_title}
              seriesDate={series.overview}
              navigation={() => {
                props.navigation.navigate("DetailScreen", series);
              }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
