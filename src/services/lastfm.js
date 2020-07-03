import axios from 'axios';

const apiKey = process.env.REACT_APP_APIKEY
const user = 'charlieb9m'
const period = '3month'
const limit = 16

const getTopTracks = async () => {
    const url = `http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${user}&period=${period}&limit=${limit}&api_key=${apiKey}&format=json`

    const response = await axios.get(url)
    return response.data
}

export default { getTopTracks }