import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cat from "./pages/Cat";
import CatBreed from "./pages/CatBreed";
import Home from "./pages/Home";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/cat/:breed" element={<CatBreed />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
