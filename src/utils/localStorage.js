export const addFavorite = (favoritedImage) => {
  const appState = JSON.parse(localStorage.getItem('APP_STATE'));
  const userFavorites = appState.userProfile.favorites;
  if (userFavorites.filter((image) => image.id === favoritedImage.id).length === 0) {
    userFavorites.push(favoritedImage);
    const updatedUserProfile = { ...appState.userProfile, favorites: userFavorites };
    const newState = { ...appState, userProfile: updatedUserProfile };
    window.localStorage.setItem('APP_STATE', JSON.stringify(newState));
  }
};

export const removeFavorite = (unfavoritedImage) => {
  const appState = JSON.parse(localStorage.getItem('APP_STATE'));
  const userFavorites = appState.userProfile.favorites;
  const updatedFavorites = userFavorites.filter((image) => image.id !== unfavoritedImage.id);
  const updatedUserProfile = { ...appState.userProfile, favorites: updatedFavorites };
  const newState = { ...appState, userProfile: updatedUserProfile };
  window.localStorage.setItem('APP_STATE', JSON.stringify(newState));
};

export const getFavorites = () => {
  const appState = JSON.parse(localStorage.getItem('APP_STATE'));
  return appState.userProfile.favorites;
};

export const getUserProfile = () => {
  const appState = JSON.parse(localStorage.getItem('APP_STATE'));
  return appState.userProfile;
};
