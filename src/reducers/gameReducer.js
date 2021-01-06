const initialState = {
    popularGames: [],
    newGames: [],
    upcomingGames: []
}


const gameReducer = (state = initialState, action) => {

    switch (action.type) {
        case "FETCH_GAME":
            return {...state};
    
        default:
            return {...state};
    }
}

export default gameReducer