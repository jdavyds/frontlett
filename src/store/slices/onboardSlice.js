import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  education: [],
  workHistory: [],
  skills: [],
  info: {},
  score: 0,
  company: {},
  jobInfo: {},
  message: "",
  error: "",
  loading: false,
};

export const onboardSlice = createSlice({
  name: "onboard",
  initialState,
  reducers: {
    updateEducation: (state, action) => {
      state.education = action.payload;
      state.loading = false;
    },
    updateWorkHistory: (state, action) => {
      state.workHistory = action.payload;
      state.loading = false;
    },
    updateSkills: (state, action) => {
      state.skills = action.payload;
      state.loading = false;
    },
    updateInfo: (state, action) => {
      state.info = action.payload;
      state.loading = false;
    },
    updateScore: (state, action) => {
      state.score = action.payload;
      state.loading = false;
    },
    updateCompany: (state, action) => {
      state.company = action.payload;
      state.loading = false;
    },
    updateJobInfo: (state, action) => {
      state.jobInfo = action.payload;
      state.loading = false;
    },
    updateMessage: (state, action) => {
      state.message = action.payload;
      state.loading = false;
    },
    isError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    isLoading: (state) => {
      state.loading = true;
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
  updateEducation,
  updateWorkHistory,
  updateSkills,
  updateInfo,
  updateScore,
  updateCompany,
  updateJobInfo,
  updateMessage,
  isError,
  isLoading,
  reset,
  purge,
} = onboardSlice.actions;

export default onboardSlice.reducer;
