// import { createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import AppContainer from "./AppContainer";
// import allReducer from "./reducers";
import productSlice from "./reducers/productSlice";
// import store from './store';

export default function App() {
  // const store = createStore(allReducer);
  const store = configureStore({
    reducer: {
      productSlice: productSlice,
      // them cac reducer o day
    }
  });

  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
