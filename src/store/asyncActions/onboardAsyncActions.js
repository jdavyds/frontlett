import { base, cleanUpErr, cleanUpResponse } from "../helper";
import {
  updateEducation,
  updateWorkHistory,
  updateSkills,
  updateInfo,
  updateMessage,
  isError,
  isLoading,
} from "../slices/onboardSlice"

export const createEducation = (data) => (dispatch) => {
  dispatch(isLoading());
  const auth = JSON.parse(localStorage.getItem("frontlett::auth"));

  base
    .post(`/onboard/create-user-education/${auth.userId}`, data)
    .then((res) => {
      const data = cleanUpResponse(res);
      const { user } = data;
      dispatch(updateEducation(user));
      dispatch(updateMessage("User Education Updated"));
    })
    .catch((res) => {
      const err = cleanUpErr(res);
      console.log(err);
      const message = err?.message;
      dispatch(isError(message ? message : res.message));
    });
};

export const createWorkHistory = (data) => (dispatch) => {
  dispatch(isLoading());
  const auth = JSON.parse(localStorage.getItem("frontlett::auth"));

  base
    .post(`/onboard/create-user-work-history/${auth.userId}`, data)
    .then((res) => {
      const data = cleanUpResponse(res);
      const { user } = data;
      dispatch(updateWorkHistory(user));
      dispatch(updateMessage("User Work History Updated"));
    })
    .catch((res) => {
      const err = cleanUpErr(res);
      console.log(err);
      const message = err?.message;
      dispatch(isError(message ? message : res.message));
    });
}

export const createSkills = (data) => (dispatch) => {
  dispatch(isLoading());
  const auth = JSON.parse(localStorage.getItem("frontlett::auth"));

  base
    .post(`/onboard/create-user-skills/${auth.userId}`, data)
    .then((res) => {
      const data = cleanUpResponse(res);
      const { user } = data;
      dispatch(updateSkills(user));
      dispatch(updateMessage("User Skills Updated"));
    })
    .catch((res) => {
      const err = cleanUpErr(res);
      console.log(err);
      const message = err?.message;
      dispatch(isError(message ? message : res.message));
    });
}

export const createInfo = (data) => (dispatch) => {
  dispatch(isLoading());
  const auth = JSON.parse(localStorage.getItem("frontlett::auth"));

  base
    .post(`/onboard/create-user-info/${auth.userId}`, data)
    .then((res) => {
      const data = cleanUpResponse(res);
      const { user } = data;
      dispatch(updateInfo(user));
      dispatch(updateMessage("User Info Updated"));
    })
    .catch((res) => {
      const err = cleanUpErr(res);
      console.log(err);
      const message = err?.message;
      dispatch(isError(message ? message : res.message));
    });
}

