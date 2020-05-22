export function signInRequest(publicKey, privateKey) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { publicKey, privateKey },
  };
}

export function signInSuccess(publicKey, privateKey) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { publicKey, privateKey },
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
