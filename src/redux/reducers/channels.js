import {
  SET_CHANNELS,
  SET_CHANNEL,
  ADD_CHANNEL,
  ADD_MESSAGE
} from "../actions/actionTypes";

const initialState = {
  channels: [],
  messages: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHANNELS:
      const channels = action.payload;
      return { ...state, channels: channels };
    case SET_CHANNEL:
      const messages = action.payload;
      return { ...state, messages: messages };

    case ADD_CHANNEL:
      return {
        ...state,
        channels: [action.payload, ...state.channels]
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
