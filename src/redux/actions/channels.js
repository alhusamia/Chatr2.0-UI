import { SET_CHANNELS } from "./actionTypes";
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
