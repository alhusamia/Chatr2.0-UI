import {
  SET_CHANNELS,
  SET_MESSAGES,
  ADD_CHANNEL,
  ADD_MESSAGE
} from "./actionTypes";

import instance from "./instance";

export const fetchChannels = () => async dispatch => {
  try {
    const res = await instance.get("channels/");
    const channels = res.data;
    dispatch({
      type: SET_CHANNELS,
      payload: channels
    });
  } catch (error) {
    console.error(error);
  }
};

export const fetchMessages = (channelID, timestamp) => async dispatch => {
  try {
    const res = await instance.get(
      `channels/${channelID}/?latest=${timestamp}`
    );
    const messages = res.data;
    dispatch({
      type: SET_MESSAGES,
      payload: messages
    });
  } catch (error) {
    console.error(error);
  }
};

export const addChannel = (name, channelID, history) => {
  return async dispatch => {
    try {
      const res = await instance.post("channels/create/", name);
      const newChannel = res.data;
      dispatch({
        type: ADD_CHANNEL,
        payload: newChannel
      });
      history.replace(`/channels/${channelID}`);
    } catch (error) {
      console.error(error);
      console.error(error.response.data);
    }
  };
};
export const addMessage = (message, channelID) => {
  return async dispatch => {
    try {
      const res = await instance.post(`channels/${channelID}/send/`, message);
      const newMessage = res.data;

      dispatch({
        type: ADD_MESSAGE,
        payload: newMessage
      });
    } catch (error) {
      console.error(error);
      console.error(error.response.data);
    }
  };
};
