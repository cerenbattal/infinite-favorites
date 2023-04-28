import constants from './constants';

export const getPhotos = async (query, page, perPage) => {
  const url = `${constants.BASE_URL}&per_page=${perPage}&tags=${query}&page=${page}`;
  console.log(`GET photos request url sending to..: ${url}`);
  return fetch(url);
};