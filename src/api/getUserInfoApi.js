import constants from './constants';

export const getUserInfo = async (userId) => {
  const url = `${constants.GET_USER_BASE_URL}&user_id=${userId}`;
  return fetch(url);
};