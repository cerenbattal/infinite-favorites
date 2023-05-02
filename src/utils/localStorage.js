export const addFavorite = (favoritedImage) => {
  const appState = JSON.parse(localStorage.getItem('APP_STATE'));
  const userFavorites = appState.favorites;
  if (userFavorites.filter((image) => image.id === favoritedImage.id).length === 0) {
    userFavorites.push(favoritedImage);
    const newState = { ...appState, favorites: userFavorites };
    localStorage.setItem('APP_STATE', JSON.stringify(newState));
  }
};

export const removeFavorite = (unfavoritedImage) => {
  const appState = JSON.parse(localStorage.getItem('APP_STATE'));
  const userFavorites = appState.favorites;
  const updatedFavorites = userFavorites.filter((image) => image.id !== unfavoritedImage.id);
  const newState = { ...appState, favorites: updatedFavorites };
  localStorage.setItem('APP_STATE', JSON.stringify(newState));
};

export const getFavorites = () => {
  const appState = JSON.parse(localStorage.getItem('APP_STATE'));
  return appState.favorites;
};

export const getUserProfile = () => {
  const appState = JSON.parse(localStorage.getItem('APP_STATE'));
  return appState.userProfile;
};
