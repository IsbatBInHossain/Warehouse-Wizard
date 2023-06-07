import { createSlice } from '@reduxjs/toolkit';

const name = JSON.parse(localStorage.getItem('name'));

const initialState = {
  isLoggedIn: false,
  name: name ? name : '',
  user: {
    name: '',
    email: '',
    phone: '',
    bio: '',
    photo: '',
  },
  userId: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin(state, action) {
      state.isLoggedIn = action.payload;
    },
    setName(state, action) {
      localStorage.setItem('name', JSON.stringify(action.payload));
      state.name = action.payload;
    },
    setUser(state, action) {
      const { name, email, phone, bio, id } = action.payload;
      state.user = { name, email, phone, bio, id };
    },
  },
});

export const { setLogin, setName, setUser } = authSlice.actions;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectName = state => state.auth.name;
export const selectUser = state => state.auth.user;

export default authSlice.reducer;
