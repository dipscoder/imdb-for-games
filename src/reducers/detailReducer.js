const initialState = {
  gameDetail: { platforms: [] },
  screenshots: { results: [] } 
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GAME_DETAIL":
      return {
        ...state,
        gameDetail: action.payload.gameDetail,
        screenshots: action.payload.screenshots,
      };

    default:
      return { ...state };
  }
};

export default detailReducer;
