import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", token: "" };

// Creiamo una slice che è l'insieme di reducer e action
const user = createSlice({
  name: "ciao",
  initialState,
  // La lista di reducer che si preoccupano di modificare lo stato
  // i cui rispettivi nomi delle proprietà sono anche i nomi delle azioni
  reducers: {
    setName: (state, action) => {
      // Usando redux toolkit sono valide entrambe le sintassi
      // {...state, name: action.payload}
      // oppure
      const name = action.payload;
      state.name = name;
    },
    setToken: (state, action) => {
      // Il nome della proprietà "payload" dell'oggetto action è definito dalla libreria
      // poi al suo interno può trovarsi qualunque cosa noi decidiamo
      const token = action.payload;
      state.token = token;
    },
  },
});

export const setName = user.actions.setName;
export const setToken = user.actions.setToken;
export default user.reducer;
