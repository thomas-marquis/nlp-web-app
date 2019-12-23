import { SEND_MESSAGE } from "./actions";

export function sendMessageReducer(state, { message }) {
  return {
    ...state,
    currentMessage: message
  };
}

export const defaultState = {
  currentMessage: ""
};

export default function reducers(state = defaultState, { type, payload }) {
  switch (type) {
    case SEND_MESSAGE:
      return sendMessageReducer(state, payload);
    default:
      return state;
  }
}
