function response(res) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return res.data;
}

function error(errorRes) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(errorRes);
}

export default {
  response,
  error,
};
