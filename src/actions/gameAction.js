import axios from "axios";
import { popularGameUrl, upcomingGameUrl, newGameUrl } from "../api";

// Normally we return the object from an action
// But as we are using the redux-thunk for asynchronous behaviour , we will return a function
const loadGames = () => {
    return async (dispatch) => {
        // Axios Fetch
        const popularDate = await axios.get(popularGameUrl())
        const upcomingDate = await axios.get(upcomingGameUrl())
        const newData = await axios.get(newGameUrl())

        dispatch({
            type: "FETCH_GAME",
            payload: {
                popular: popularDate.data.results,
                upcoming: upcomingDate.data.results,
                newGames: newData.data.results,
            }
        })
    }
}

export default loadGames