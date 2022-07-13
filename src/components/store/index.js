import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  data: [
    { id: 1, name: "John", email: "John@test.com" },
    { id: 2, name: "Amaan", email: "John@gmail.com" },
  ],
  content: false,
};

const formSlice = createSlice({
  name: "Form",
  initialState,
  reducers: {
    toggle(state) {
      state.content = !state.content;
    },
    saveForm(state, action) {
      state.data.unshift(action.payload);
    },
    deleteEntry(state, action) {
      state.data = state.data.filter((el) => el.id !== action.payload);
    },
  },
});

const store = configureStore({ reducer: formSlice.reducer });
export const formActions = formSlice.actions;
export default store;
