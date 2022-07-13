const initialState = {
    video_related: [],
    related_loading: true,
    error: null,
  };
  
  export default function relatedReducers(state = initialState, { type, payload }) {
    switch (type) {
      case "GET RELATED":
        return {
          ...state,
          related_loading: true,
        };
  
      case "GET RELATED SUCCESSFUL":
        return {
          ...state,
          video_related: payload,
          related_loading: false,
        };
  
      case "GET RELATED FAILED":
        return {
          ...state,
          related_loading: false,
          error: payload,
        };
      case "DELETE VIDEO RELATED":
        return{
          ...state,
          video_related: [],
        };
      default:
        return state;
    }
  }
  