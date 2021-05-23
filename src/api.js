// Base URL

const base_url = "https://api.rawg.io/api/";
const API_KEY = process.env.REACT_APP_RAWG_KEY
// Geting the date

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`
    } else {
        return month
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate()
    if (day < 10) {
        return `0${day}`
    } else {
        return day
    }
}

const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()

const presentYear = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`


// Games
const popular_games = `games?key=${API_KEY}&dates=${lastYear},${presentYear}&ordering=-rating&page_size=10`
const upcoming_games = `games?key=${API_KEY}&dates=${presentYear},${nextYear}&ordering=-added&page_size=10`
const new_games = `games?key=${API_KEY}&dates=${lastYear},${presentYear}&ordering=-released&page_size=10`

// Games URL
export const popularGameUrl = () => `${base_url}${popular_games}`
export const upcomingGameUrl = () => `${base_url}${upcoming_games}`
export const newGameUrl = () => `${base_url}${new_games}`

// Game Detail URL
export const gameDetailURL = (id) => `${base_url}games/${id}?key=${API_KEY}`

// Game Screenshots
export const gameScreenshotsURL = (id) => `${base_url}games/${id}/screenshots?key=${API_KEY}`

// Searched Game
export const gameSearchURL = (game_name) => `${base_url}games?search=${game_name}&page_size=9&key=${API_KEY}`