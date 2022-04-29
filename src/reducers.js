import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "" };

const user = createSlice({
  name: "ciao",
  initialState,
  reducers: {
    setName: (state, action) => {
      const name = action.payload;
      state.name = name;
    },
  },
});

export const setName = user.actions.setName;
export default user.reducer;
