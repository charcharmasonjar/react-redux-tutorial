import { createStore } from "redux";
import rootReducer from "../reducers/index";

// store is result of calling createStore function
// createStore takes redcuer as the first argument
const store = createStore(rootReducer);

export default store;