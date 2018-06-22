const setNews = (state, news) => {
  return {
    ...state,
    news: news,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setNews": return setNews(state, action.news);
    default: return state;
  }
}

export default reducer;
