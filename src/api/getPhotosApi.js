import constants from './constants';

export const getPhotos = async (query, page, perPage) => {
  const url = `${constants.GET_PHOTOS_BASE_URL}&per_page=${perPage}&tags=${query}&page=${page}`;
  return fetch(url);
};