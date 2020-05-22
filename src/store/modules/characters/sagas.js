import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { charactersLoadSuccess, charactersLoadFailure } from './actions';
import ServiceCharacters from '../../../services/marvel/characters';

export function* load({ payload }) {
  try {
    const { params } = payload;
    const response = yield call(ServiceCharacters.get, params);
    yield put(charactersLoadSuccess({ characters: response.data.results }));
  } catch (err) {
    toast.error('Falha na busca dos dados!');
    yield put(charactersLoadFailure());
  }
}

export default all([takeLatest('@characters/CHARACTERS_REQUEST', load)]);
