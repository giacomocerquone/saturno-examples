import { API_TOKEN, BASE_URL } from "../constants";

import axios from "axios";

// const client = (endpoint, method, data) => {
//   const headers = new Headers();
//   headers.append("x-api-key", API_TOKEN);

//   const options = {
//     method,
//     headers,
//     body: JSON.stringify(data),
//   };

//   return fetch(BASE_URL + endpoint, options);
// };

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-api-key": API_TOKEN,
  },
});

export default client;
