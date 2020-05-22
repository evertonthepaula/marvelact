export function charactersRequest(params = {}) {
  return {
    type: '@characters/CHARACTERS_REQUEST',
    payload: { params },
  };
}

export function charactersLoadSuccess({ characters }) {
  return {
    type: '@characters/CHARACTERS_LOAD_SUCCESS',
    payload: { characters },
  };
}

export function charactersLoadFailure() {
  return {
    type: '@characters/CHARACTERS_LOAD_FAILURE',
  };
}

export function charactersUpdate(characters = {}) {
  return {
    type: '@characters/CHARACTERS_UPDATE',
    payload: { characters },
  };
}

export function charactersFind(id) {
  return {
    type: '@characters/CHARACTERS_FIND',
    payload: { id },
  };
}
