import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    //general
    isLoading: true,
    search: "",
    error: "",
    message: "",
    darkMode: false,

    //army
    army: [],
  },

  reducers: {
    //general
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
    setDarkMode(state, action) {
      state.darkMode = action.payload;
    },

    //army
    addToArmy(state, action) {
      state.army.push(action.payload);
    },
    delFromArmy(state, action) {
      state.army = state.army.filter((item) => item !== action.payload);
    },
  },
});

export const {
  //general
  setIsLoading,
  setSearch,
  setError,
  setMessage,
  setDarkMode,
  setImageUrl,

  //army
  addToArmy,
  delFromArmy,
} = appSlice.actions;

export default appSlice.reducer;
