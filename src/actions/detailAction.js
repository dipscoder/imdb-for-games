import axios from "axios";
import { useDispatch } from "react-redux";
import { gameDetailURL, gameScreenshotsURL } from "../api";

const loadDetail = (id) => {

    return async (dispatch) => {
        dispatch({
            type: "LOADING_DETAIL",
        })
        
        const detailData = await axios.get(gameDetailURL(id))
        const screenshotData = await axios.get(gameScreenshotsURL(id))

        dispatch({
            type: "GAME_DETAIL",
            payload: {
                gameDetail : detailData.data,
                screenshots : screenshotData.data,
            }
        })
    }
}

export default loadDetail;