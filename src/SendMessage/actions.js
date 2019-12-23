// action types
export const SEND_MESSAGE = "SEND_MESSAGE";

// action creators
export function sendMessage(message) {
  return {
    type: SEND_MESSAGE,
    payload: {
      message
    }
  };
}
