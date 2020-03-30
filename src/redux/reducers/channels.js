import { SET_CHANNELS, SET_CHANNEL, ADD_CHANNEL } from "../actions/actionTypes";

const initialState = {
  channels: [],
  channel: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHANNELS:
      const channels = action.payload;
      return { ...state, channels: channels };
    case SET_CHANNEL:
      const channel = action.payload;
      return { ...state, channel: channel };

    case ADD_CHANNEL:
      return {
        ...state,
        channels: [action.payload, ...state.channels]
      };
    default:
      return state;
  }
};

export default reducer;
