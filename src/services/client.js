import { API_TOKEN, BASE_URL } from "../constants";

const client = (endpoint, method, data) => {
  const headers = new Headers();
  headers.append("x-api-key", API_TOKEN);

  const options = {
    method,
    headers,
    body: JSON.stringify(data),
  };

  return fetch(BASE_URL + endpoint, options);
};

export default client;
