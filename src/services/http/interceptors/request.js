import { Md5 } from 'ts-md5/dist/md5';

function request(config) {
  // eslint-disable-next-line no-param-reassign
  config.params = auth();

  return config;
}

function auth() {
  const privateKey = localStorage.getItem('privateKey');
  const publicKey = localStorage.getItem('publicKey');

  const timestamp = Number(new Date());
  const hash = Md5.hashStr(timestamp + privateKey + publicKey);

  return {
    apikey: publicKey,
    ts: timestamp,
    hash,
  };
}

function error(errorRes) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(errorRes);
}

export default {
  request,
  error,
};
