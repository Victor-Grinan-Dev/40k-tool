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
    view: "home",// my models, grapharmy

    //army
    army: {
      totalPts:0,
      armyList: [],
      characters:[],
      battleline:[],
      units:[

      ], //unit_leader: unit:
    },


    //indexCard'
    indexCard: {}, //this is the single page of a model
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
    addToArmyList(state, action) {
      state.army.armyList.push(action.payload);
    },
    addToTotalPts(state, action) {
      state.army.totalPts = state.army.totalPts + action.payload;
    },




    delFromArmy(state, action) {
      state.army = state.army.armyList.filter((item) => item !== action.payload);
    },

    //indexCard
    setIndexCard(state, action) {
      state.indexCard = action.payload;
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
  addToArmyList,
  addToTotalPts,
  delFromArmy,

  //indexCard
  setIndexCard,
} = appSlice.actions;

export default appSlice.reducer;
