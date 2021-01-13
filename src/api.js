// Base URL

const base_url = "https://api.rawg.io/api/";

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
const popular_games = `games?dates=${lastYear},${presentYear}&ordering=-rating&page_size=10`
const upcoming_games = `games?dates=${presentYear},${nextYear}&ordering=-added&page_size=10`
const new_games = `games?dates=${lastYear},${presentYear}&ordering=-released&page_size=10`

// Games URL
export const popularGameUrl = () => `${base_url}${popular_games}`
export const upcomingGameUrl = () => `${base_url}${upcoming_games}`
export const newGameUrl = () => `${base_url}${new_games}`

// Game Detail URL
export const gameDetailURL = (id) => `${base_url}games/${id}`

// Game Screenshots
export const gameScreenshotsURL = (id) => `${base_url}games/${id}/screenshots`