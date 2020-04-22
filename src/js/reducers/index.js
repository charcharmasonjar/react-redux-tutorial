import { ADD_ARTICLE } from "../constants/action-types";

const initialstate = {
  articles: []
};

// initial state passed as a default parameter
function rootReducer(state = initialstate, action) {
  if (action.type === ADD_ARTICLE) {
    // use Object.assign to return a new object (dont wanna alter og state)
    return Object.assign({}, state, {
      // use concat (instead of push) for keeping og array
      articles: state.articles.concat(action.paylaod)
    })
  }
  return state;
}

export default rootReducer;
