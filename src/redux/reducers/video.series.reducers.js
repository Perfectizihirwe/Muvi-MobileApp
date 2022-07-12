const initialState = {
    serie_id: [],
    id_loading: true,
    error: null,
  };
  
  export default function SerieIdReducers(state = initialState, { type, payload }) {
    switch (type) {
      case "GET SERIE ID":
        return {
          ...state,
          id_loading: true,
        };
  
      case "GET SERIE ID SUCCESSFUL":
        return {
          ...state,
          serie_id: payload,
          id_loading: false,
        };
  
      case "GET SERIE ID FAILED":
        return {
          ...state,
          id_loading: false,
          error: payload,
        };
        case "DELETE SERIE ID":
      return{
        ...state,
        serie_id: [],
      };
      default:
        return state;
    }
  }
  