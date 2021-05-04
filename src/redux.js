// action types
const API_CALL_REQUEST = 'API_CALL_REQUEST';
const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
const API_CALL_FAILURE = 'API_CALL_FAILURE';

// reducer with initial state
const initialState = {
  fetching: false,
  error: null,
  data: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null, data: [] };
    case API_CALL_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.data,
      };
    case API_CALL_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
        data: [],
      };
    default:
      return state;
  }
}
