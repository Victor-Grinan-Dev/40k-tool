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
    data: [
      "1",
      "2",
      "3",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit autem dolores laudantium voluptatem tempore ad repudiandae suscipit, tenetur, amet, nam molestias facilis sunt? Adipisci quia rem molestiae alias? Magni quo ipsam suscipit. Esse provident vel dolore numquam in hic a, accusamus corrupti ipsum unde quis, facilis architecto libero repellendus.",
    ],
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
} = appSlice.actions;

export default appSlice.reducer;
