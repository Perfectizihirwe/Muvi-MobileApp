import AsyncStorage from "@react-native-async-storage/async-storage";

export const Init = () => {
  return async (dispatch) => {
    let token = await AsyncStorage.getItem("token");
    if (token !== null) {
      console.log("token fetched");
      dispatch({
        type: "LOGIN",
        payload: token,
      });
    }
  };
};

export const authLogin = (username, password) => {
  return async (dispatch) => {
    const token = username + password;
    await AsyncStorage.setItem("token", token);
    dispatch({
      type: "LOGIN",
      payload: token,
    });
  };
};

export const authLogout = () => {
  return async dispatch => {
    await AsyncStorage.removeItem("token");
    dispatch({
      type: "LOGOUT",
    });
  };
};
