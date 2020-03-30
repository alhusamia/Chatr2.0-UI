import { FETCH_CHANNELS } from "../actions/actionTypes";
  const initialState = {
    channels: []
  };
  export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CHANNELS:
        const channels = action.payload;
        return {
          ...state,
          channels: channels
        };
      
      default:
        return state;
    }
  };

  