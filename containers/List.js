// react redux's connect function
import { connect } from "react-redux";

// import in the getTitles API action
import { getNews } from "../data/actions";

// import in the List component
import List from "../screens/List";

// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = state => {
  return {
    news: state.news
  };
};

// setup mapDispatchToProps to call the action
const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(getNews()),
  };
};

// connect up mapStateToProps with the List component
// List' props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(List);
