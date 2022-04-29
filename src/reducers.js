import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", token: "" };

const user = createSlice({
  name: "ciao",
  initialState,
  reducers: {
    setName: (state, action) => {
      const name = action.payload;
      state.name = name;
    },
    setToken: (state, action) => {
      const token = action.payload;
      state.token = token;
    },
  },
});

export const setName = user.actions.setName;
export const setToken = user.actions.setToken;
export default user.reducer;
