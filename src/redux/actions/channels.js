import {
  SET_CHANNELS,
  SET_CHANNEL,
  ADD_CHANNEL,
  ADD_MESSAGE
} from "./actionTypes";
import { setErrors } from "./errors";

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
    dispatch(setErrors(error));
  }
};

export const fetchChannel = channelID => async dispatch => {
  try {
    const res = await instance.get(`channels/${channelID}/`);
    const messages = res.data;
    dispatch({
      type: SET_CHANNEL,
      payload: messages
    });
  } catch (error) {
    console.error(error);
  }
};

export const addChannel = name => {
  return async dispatch => {
    try {
      const res = await instance.post("channels/create/", name);
      const newChannel = res.data;

      dispatch({
        type: ADD_CHANNEL,
        payload: newChannel
      });
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
