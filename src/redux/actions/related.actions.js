import axios, { Axios } from "axios";

export function fetchVideoRelated(id) {
  return (dispatch) => {
    dispatch({
      type: "GET RELATED",
    });

    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${id}/similar?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&page=1`,
    })
      .then((responseData) => {
        const { data } = responseData;
        console.log(data);
        dispatch({
          type: "GET RELATED SUCCESSFUL",
          payload: data.results,
        });
      })
      .catch((error) => {
        console.log(error.message);
        dispatch({
          type: "GET RELATED FAILED",
          payload: error.message,
        });
      });
  };
}

export function deleteVideoRelated() {
  return (dispatch) => {
    dispatch({
      type: "DELETE VIDEO RELATED",
    });
  };
}
