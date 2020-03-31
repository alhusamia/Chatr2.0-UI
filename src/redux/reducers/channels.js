import { SET_CHANNELS } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHANNELS:
      const channels = action.payload;
      return channels;

    default:
      return state;
  }
};

export default reducer;
