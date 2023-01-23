import axios from "axios";

export const postReq = (url, payload, headers) => {
  return axios
    .post(url, payload, {
      headers: {
        ...headers,
      },
    })
    .then((response) => response)
    .catch((error) => {
      return { error: error };
    });
};

export const getReq = (url, headers) => {
  return axios
    .get(url, {
      headers: {
        ...headers,
      },
    })
    .then((response) => response)
    .catch((error) => {
      return { error: error };
    });
};

export const putReq = (url, payload, headers) => {
  return axios
    .put(url, payload, {
      headers: {
        ...headers,
      },
    })
    .then((response) => response)
    .catch((error) => {
      return { error: error };
    });
};
