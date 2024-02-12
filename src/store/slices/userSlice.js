import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  userDetails: [],
  verified: false,
  message: "",
  error: "",
  loading: false,
  address: null,
  role: "",
  link: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.userDetails = action.payload;
      state.loading = false;
    },
    updateAddress: (state, action) => {
      state.address = action.payload;
      state.loading = false;
    },
    updateMessage: (state, action) => {
      state.message = action.payload;
      state.loading = false;
    },
    updateLink: (state, action) => {
      state.link = action.payload;
    },
    updateRole: (state, action) => {
      state.role = action.payload;
      state.loading = false;
    },
    isError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    isLoading: (state) => {
      state.loading = true;
    },
    isVerified: (state) => {
      state.verified = true;
      state.loading = false;
    },
    reset: (state) => {
      state.userDetails = [];
      state.verified = false;
      state.message = "";
      state.error = "";
      state.loading = false;
      state.address = null;
      state.role = "";
    },
    purge: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
});

export const {
  updateUser,
  updateAddress,
  updateMessage,
  updateLink,
  updateRole,
  isError,
  isLoading,
  isVerified,
  reset,
} = userSlice.actions;

export default userSlice.reducer;
