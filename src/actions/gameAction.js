import axios from "axios";
import { popularGameUrl, upcomingGameUrl, newGameUrl, gameSearchURL } from "../api";

// Normally we return the object from an action
// But as we are using the redux-thunk for asynchronous behaviour , we will return a function
const loadGames = () => {
    return async (dispatch) => {
        // Axios Fetch
        const popularData = await axios.get(popularGameUrl())
        const upcomingData = await axios.get(upcomingGameUrl())
        const newData = await axios.get(newGameUrl())

        dispatch({
            type: "FETCH_GAME",
            payload: {
                popular: popularData.data.results,
                upcoming: upcomingData.data.results,
                newGames: newData.data.results,
            }
        })
    }
}

export const fetchSearch = (game_name) => {
    return async (dispatch) => {
        const searchedGame = await axios.get(gameSearchURL(game_name))

        dispatch({
            type: "FETCH_SEARCH",
            payload: {
                searched: searchedGame.data.results,
            }

        })
    }
}

export default loadGames