import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'marvelact',
      storage,
      whitelist: ['auth', 'characters'],
    },
    reducers
  );

  return persistedReducer;
};
