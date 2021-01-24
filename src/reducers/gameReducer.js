const initialState = {
  popularGames: [],
  newGames: [],
  upcomingGames: [],
  searched: []
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAME":
      return {
        ...state,
        popularGames: action.payload.popular,
        newGames: action.payload.newGames,
        upcomingGames: action.payload.upcoming,
      };

    case "FETCH_SEARCH":
      return{
        ...state,
        searched: action.payload.searched,
      }
    
      case "CLEAR_SEARCH":
        return{
          ...state,
          searched: [],
        }

    default:
      return { ...state };
  }
};

export default gameReducer;
