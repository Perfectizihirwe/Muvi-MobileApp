import axios, { Axios } from "axios";

export function fetchSerieId(id) {
  return (dispatch) => {
    dispatch({
      type: "GET SERIE ID",
    });

    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/tv/${id}/videos?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US`,
    })
      .then((responseData) => {
        const { data } = responseData;
        console.log(data);
        dispatch({
          type: "GET SERIE ID SUCCESSFUL",
          payload: data.results,
        });
      })
      .catch((error) => {
        console.log(error.message);
        dispatch({
          type: "GET SERIE ID FAILED",
          payload: error.message,
        });
      });
  };
}

export function deleteSerieId(){
  return(dispatch) => {
    dispatch({
      type: "DELETE SERIE ID"
    });
  }
}