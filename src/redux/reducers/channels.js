import {
  SET_CHANNELS,
  SET_MESSAGES,
  ADD_CHANNEL,
  ADD_MESSAGE,
  CLEAR_MESSAGES
} from "../actions/actionTypes";

const initialState = {
  channels: [],
  messages: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHANNELS:
      const channels = action.payload;
      return {
        ...state,
        channels: channels
      };

    case CLEAR_MESSAGES:
      return { ...state, messages: [] };

    case SET_MESSAGES:
      const newMessages = action.payload;
      return {
        ...state,
        messages: [...state.messages, ...newMessages]
      };

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
