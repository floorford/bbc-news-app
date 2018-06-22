// import our axios config file
import axios from "./axios";

export const getNews = () => dispatch => {
  axios.get("/v2/top-headlines?country=gb").then(({ data }) => {
    const articles = data.articles;
    console.log("HELLO HELLO" + articles)

    // dispatch the setNews action, passing along the articles List
    dispatch(setNews(articles));
  });
};

export const setNews = articles => {
  return {
    type: "setNews",
    news: articles,
  };
};
