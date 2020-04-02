import { ADD_MESSAGE } from "../actions/actionTypes";

/**
 * You're not using this reducer, you can get rid of it.
 */
const initialState = {
  messages: localStorage.getItem("messages")
    ? JSON.parse(localStorage.getItem("messages"))
    : []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = { title: action.payload };
      const newMessages = [...state.messages, newMessage];
      localStorage.setItem("items", JSON.stringify(newMessages));
      return {
        ...state,
        messages: newMessages
      };
    default:
      return {
        state
      };
  }
};
