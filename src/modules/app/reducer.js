import { DEFAULT_ACTION, TEST_FETCH, FAILED_TEST_FETCH } from "./actions";

const initialState = {
  msg: "",
  data: [],
  error: ""
};

export default (state = initialState, action = {}) => {
  switch (action.payload) {
    case DEFAULT_ACTION:
      return { ...state, msg: action.payload };

    case TEST_FETCH:
      return { ...state, data: [...action.data] };

    case FAILED_TEST_FETCH:
      return { ...state, error: action.err };

    default:
      return state;
  }
};
