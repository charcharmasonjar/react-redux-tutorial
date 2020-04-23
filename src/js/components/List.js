import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };
};

// List component receives prop articles from the reducer
const ConnectedList = ({ articles }) => (
  <ul>
    {articles.map((el, index) => (
      <li key={index}>{el.title}</li>
    ))}
  </ul>
)

// connect is MAJOR KEY 🔑 for connecting react component with redux
// connect takes at least one argument
const List = connect(mapStateToProps)(ConnectedList);

export default List;