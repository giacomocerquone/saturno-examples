import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";

// Con questa chiamata creo lo store e gli passo la lista di reducer
const store = configureStore({
  // questo equivale a un combinereducer di primo livello che trovare sulla documentazione
  reducer: {
    user: rootReducer,
  },
});

export default store;
