import instance from "./instance";
import {
  FETCH_CHANNELS
} from "./actionTypes";
import { setErrors } from "./errors";
export const fetchChannels = () => async dispatch => {  
    try {
        const res = await instance.get("/channels/");
        const channels = res.data; 
           dispatch({ 
               type: FETCH_CHANNELS, 
               payload: channels });  } 
           catch (err) {   
                console.error(err); 
                dispatch(setErrors(err));
            }};