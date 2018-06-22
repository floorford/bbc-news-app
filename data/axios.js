import axios from "axios";

export default axios.create({
  // use your own url
  baseURL: "https://newsapi.org",

  // use your own key
  params: {"apiKey": "0696675ebd6e4a2990c238aeb6f6d8c5"},

  // make sure we get JSON back
  headers: {
    "Accept": "application/json",
  },
});
