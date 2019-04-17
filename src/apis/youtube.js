import axios from "axios";
require("dotenv").config();

export default axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3`,
    timeout: 3000,
    params: {
        part: "snippet",
        maxResults: 5,
        relevanceLanguage: 'en',
        key: process.env.REACT_APP_API_KEY
    }
});
