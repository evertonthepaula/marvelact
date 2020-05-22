import { takeLatest, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../services/history';

import { charactersRequest } from '../characters/actions';

export function* signIn({ payload }) {
  try {
    const { publicKey, privateKey } = payload;

    localStorage.setItem('privateKey', privateKey);
    localStorage.setItem('publicKey', publicKey);

    yield put(charactersRequest());

    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autenticação.');
  }
}
export function setToken({ payload }) {
  if (!payload) return;

  const { publicKey, privateKey } = payload;

  localStorage.setItem('privateKey', privateKey);
  localStorage.setItem('publicKey', publicKey);
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
