import axios from "axios";

export const login = (headers) =>
  axios.get("https://api.chatengine.io/chats", {
    headers,
  });