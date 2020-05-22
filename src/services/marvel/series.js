import Api from '../http/index';

function get({
  titleStartsWith = '',
  startYear = '',
  modifiedSince = '',
  comics = '',
  stories = '',
  events = '',
  creators = '',
  characters = '',
  seriesType = '',
  contains = '',
  orderBy = 'title',
  limit = 20,
  offset = 0,
}) {
  return Api(
    `series?${titleStartsWith ? `titleStartsWith=${titleStartsWith}&` : ''}${
      startYear ? `startYear=${startYear}&` : ''
    }${modifiedSince ? `modifiedSince=${modifiedSince}&` : ''}${
      comics ? `comics=${comics}&` : ''
    }${stories ? `stories=${stories}&` : ''}${
      events ? `events=${events}&` : ''
    }${creators ? `creators=${creators}&` : ''}${
      characters ? `characters=${characters}&` : ''
    }${seriesType ? `seriesType=${seriesType}&` : ''}${
      contains ? `contains=${contains}&` : ''
    }orderBy=${orderBy}&limit=${limit}offset=${offset}`
  );
}

function find(id) {
  return Api(`series/${id}`);
}

export default {
  get,
  find,
};
