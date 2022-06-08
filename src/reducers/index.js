import { combineReducers } from "redux";
// import accountReducer from "./accountReducer";
import productReducer from "./productReducer";

const allReducer = combineReducers({
  // accountReducer,
  productReducer
  // them cac reducer o day
});

export default allReducer;
