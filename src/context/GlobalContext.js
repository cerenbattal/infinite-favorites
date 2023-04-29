import createDataContext from './createDataContext';

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'add_favorite':
      if ((state.userProfile.favorites.filter(image => image.id !== action.payload.image.Id)).length === 0) {
        const updatedFavorites = [...state.userProfile.favorites, action.payload.image];
        const updatedUserProfile = { ...state.userProfile, favorites: updatedFavorites };
        return { ...state, userProfile: updatedUserProfile };
      } else {
        return state;
      }
    case 'update_user':
      const editedUser = state.userProfile
      editedUser[action.payload.user.userId] = action.payload.userProfile;
      return { ...state, userProfile: editedUser }

    case 'remove_favorite':
      const updatedFavorites = state.userProfile.favorites.filter(image => image.id !== action.payload.image.id);
      const updatedUserProfile = { ...state.userProfile, favorites: updatedFavorites };
      return { ...state, userProfile: updatedUserProfile };

    case 'set_theme':
      return { ...state, theme: action.payload.theme };

    default:
      return state;
  }
};

const addFavorite = dispatch => (image) => {
  dispatch({ type: 'add_favorite', payload: { image: image } });
};

const updateUser = dispatch => (userProfile) => {
  dispatch({ type: 'update_user', payload: { userProfile: userProfile } });
};

const removeFavorite = dispatch => (image) => {
  dispatch({ type: 'remove_favorite', payload: { image: image } });
};

const setTheme = dispatch => (theme) => {
  dispatch({ type: 'set_theme', payload: { theme: theme } });
};

export const { Provider, Context } = createDataContext(
  globalReducer,
  { addFavorite, updateUser, removeFavorite, setTheme },
  {
    userProfile: {
      userId: 1,
      username: 'cerenbattal',
      name: 'Ceren',
      surname: 'Battal',
      location: 'Istanbul',
      email: 'cerenbattal97@gmail.com',
      favorites: []
    },
    theme: 'light'
  }
);