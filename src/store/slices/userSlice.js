import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  id: null,
  token: null,
  full_name: null,
  email: null,
  weight: null,
  age: null,
  social_links: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id
      state.token = action.payload.token
      state.full_name = action.payload.full_name
      state.email = action.payload.email
      state.weight = action.payload.weight
      state.age = action.payload.age
      state.social_links = action.payload.social_links
    },
    removeUser(state) {
      state.id = null
      state.token = null
      state.full_name = null
      state.email = null
      state.weight = null
      state.age = null
      state.social_links = null
    },
  },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer