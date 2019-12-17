import axios from "axios";

const KEY = "AIzaSyCgkTTvA9yzaLmeEle43mqCemeC_y4aWKs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY
  }
});
