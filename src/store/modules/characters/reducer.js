/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
  etag: null,
  characters: [],
  character: null,
  loading: false,
};

export default function characters(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@characters/CHARACTERS_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@characters/CHARACTERS_LOAD_SUCCESS': {
        draft.characters = action.payload.characters;
        draft.etag = null;
        draft.loading = false;
        break;
      }

      case '@characters/CHARACTERS_LOAD_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@characters/CHARACTERS_UPDATE': {
        draft.characters = state.characters.map((item) =>
          item.id === action.payload.characters.id
            ? action.payload.characters
            : item
        );
        break;
      }

      case '@characters/CHARACTERS_FIND': {
        draft.character = state.characters.find((item) =>
          item.id === action.payload.id ? item : false
        );
        break;
      }

      default:
    }
  });
}
