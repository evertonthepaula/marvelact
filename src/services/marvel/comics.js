import Api from '../http/index';

function get({
  format = '',
  formatType = '',
  noVariants = '',
  dateDescriptor = '',
  dateRange = '',
  title = '',
  titleStartsWith = '',
  startYear = '',
  issueNumber = '',
  diamondCode = '',
  digitalId = '',
  upc = '',
  isbn = '',
  ean = '',
  issn = '',
  hasDigitalIssue = '',
  modifiedSince = '',
  creatorsr = '',
  characters = '',
  series = '',
  events = '',
  stories = '',
  sharedAppearances = '',
  collaborators = '',
  orderBy = 'title',
  limit = 20,
  offset = 0,
}) {
  return Api(
    `comics?${format ? `format=${format}&` : ''}${
      formatType ? `formatType=${formatType}&` : ''
    }${noVariants ? `noVariants=${noVariants}&` : ''}${
      dateDescriptor ? `dateDescriptor=${dateDescriptor}&` : ''
    }${dateRange ? `dateRange=${dateRange}&` : ''}${
      title ? `title=${title}&` : ''
    }${titleStartsWith ? `titleStartsWith=${titleStartsWith}&` : ''}${
      startYear ? `startYear=${startYear}&` : ''
    }${issueNumber ? `issueNumber=${issueNumber}&` : ''}${
      diamondCode ? `diamondCode=${diamondCode}&` : ''
    }${digitalId ? `digitalId=${digitalId}&` : ''}${upc ? `upc=${upc}&` : ''}${
      isbn ? `isbn=${isbn}&` : ''
    }${ean ? `ean=${ean}&` : ''}${issn ? `issn=${issn}&` : ''}${
      hasDigitalIssue ? `hasDigitalIssue=${hasDigitalIssue}&` : ''
    }${modifiedSince ? `modifiedSince=${modifiedSince}&` : ''}${
      creatorsr ? `creatorsr=${creatorsr}&` : ''
    }${characters ? `characters=${characters}&` : ''}${
      series ? `series=${series}&` : ''
    }${events ? `events=${events}&` : ''}${
      stories ? `stories=${stories}&` : ''
    }${sharedAppearances ? `sharedAppearances=${sharedAppearances}&` : ''}${
      collaborators ? `collaborators=${collaborators}&` : ''
    }orderBy=${orderBy}&limit=${limit}offset=${offset}`
  );
}

function find(id) {
  return Api(`comics/${id}`);
}

export default {
  get,
  find,
};
