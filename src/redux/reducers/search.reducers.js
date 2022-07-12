const initialState = {
  search_results: [],
  searching_done: false,
  is_loading: false,
  error: null,
};

export default function searchReducers(state = initialState, action) {
  switch (action.type) {
    case "SEARCHING":
      return {
        series_loading: true,
        is_loading: true,
      };
    case "SEARCHING_DONE":
      return {
        ...state,
        search_results: action.payload,
        searching_done: true,
        is_loading: false

      };
    case "SEARCHING_FAILED":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
