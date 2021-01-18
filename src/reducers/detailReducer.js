const initialState = {
  gameDetail: { platforms: [] },
  screenshots: { results: [] },
  isLoading: true,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GAME_DETAIL":
      return {
        ...state,
        gameDetail: action.payload.gameDetail,
        screenshots: action.payload.screenshots,
        isLoading: false
      };

    case "LOADING_DETAIL":
      return { 
        ...state,
        isLoading: true
      }

    default:
      return { ...state };
  }
};

export default detailReducer;
