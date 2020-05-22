import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import characters from './characters/sagas';

export default function* rootSaga() {
  yield all([auth, characters]);
}
