import { SET_CHANNELS, SET_CHANNEL, ADD_CHANNEL } from "./actionTypes";
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
    const res = await instance.get(`channels/${channelID}`);
    const channel = res.data;
    dispatch({
      type: SET_CHANNEL,
      payload: channel
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
      console.log("res", res.data);
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