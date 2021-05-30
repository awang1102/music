export const initialState = {
    user: null,
    token: null,
    artists: [],
    songs: [],
    recommended: [],
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
    case "SET_USER": return {
        ...state, 
        user: action.user
        }
    case "SET_RECOMMENDED": return {
        ...state, 
        recommended: action.recommended
        }
    default:
      return state;
  }
};

export default reducer;