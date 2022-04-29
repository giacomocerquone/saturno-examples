import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";

let store = configureStore({
  reducer: {
    user: rootReducer,
  },
});

export default store;
