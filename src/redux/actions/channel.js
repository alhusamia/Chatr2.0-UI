import { ADD_MESSAGE } from "./actionTypes";

export const add_message = message => {
    return {
        type:ADD_MESSAGE,
        payload:message
    }
}