import Api from '../http/index';

function get({
  name = '',
  comics = '',
  series = '',
  events = '',
  stories = '',
  modifiedSince = '',
  nameStartsWith = '',
  orderBy = 'name',
  limit = 10,
  offset = 0,
}) {
  return Api(
    `characters?${name ? `name=${name}&` : ''}${
      comics ? `comics=${comics}&` : ''
    }${series ? `series=${series}&` : ''}${events ? `events=${events}&` : ''}${
      stories ? `stories=${stories}&` : ''
    }${modifiedSince ? `modifiedSince=${modifiedSince}&` : ''}${
      nameStartsWith ? `nameStartsWith=${nameStartsWith}&` : ''
    }orderBy=${orderBy}&limit=${limit}&offset=${offset}`
  );
}

function find(id) {
  return Api(`characters/${id}`);
}

export default {
  get,
  find,
};
