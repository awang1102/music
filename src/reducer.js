export const initialState = {
    user: null,
    token: null,
    artists: [],
    songs: [],
};

const reducer = (state, action) => {
  switch(action.type) {
    case "SET_TOKEN": return {
            ...state, 
            token: action.token
        }
    case "SET_ARTISTS": return {
            ...state, 
            artists: action.artists
        }
    case "SET_SONGS": return {
            ...state, 
            songs: action.songs
        }
    default:
      return state;
  }
};

export default reducer;