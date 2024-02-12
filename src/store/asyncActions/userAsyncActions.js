import api, { base, cleanUpErr, cleanUpResponse } from "../helper";
import {
  updateUser,
  updateMessage,
  isError,
  isLoading,
  isVerified,
  updateRole,
  updateLink,
} from "../slices/userSlice";

export const register = (data) => (dispatch) => {
  dispatch(isLoading());
  base
    .post("/auth/register", data)
    .then((res) => {
      const data = cleanUpResponse(res);
      const { user } = data;
      const auth = {
        token: data.token,
        userId: user.id,
      };
      localStorage.setItem("frontlett::auth", JSON.stringify(auth));
      dispatch(updateUser(user));
      dispatch(updateLink(data.link));
      dispatch(updateMessage("Registration Successful"));
      dispatch(isVerified());
      dispatch(updateRole(user?.role));
      
    })
    .catch((res) => {
      const err = cleanUpErr(res);
      console.log(err);
      const message = err?.message;
      dispatch(isError(message ? message : res.message));
    });
};

export const login = (data) => (dispatch) => {
  dispatch(isLoading());
  base
    .post("/auth/login", data)
    .then((res) => {
      const data = cleanUpResponse(res);
      const { user } = data;
      const auth = {
        token: data.token,
        userId: user.id,
      };
      localStorage.setItem("cbn::auth", JSON.stringify(auth));
      dispatch(updateUser(user));
      dispatch(updateMessage("Login Successful"));
      dispatch(isVerified());
    })
    .catch((res) => {
      const err = cleanUpErr(res);
      const message = err?.message;
      dispatch(isError(message ? message : res.message));
    });
};


export const verifyCode = (data) => (dispatch) => {
  dispatch(isLoading());
  base
    .post("/auth/verify-code", data)
    .then((res) => {
      const data = cleanUpResponse(res);
      const { message } = data;
      dispatch(updateMessage(message));
    })
    .catch((res) => {
      const err = cleanUpErr(res);
      const message = err?.message;
      dispatch(isError(message ? message : res.message));
    });
};

export const logout = () => (dispatch) => {
  dispatch(isLoading());
  api
    .post(`/auth/logout`)
    .then((res) => {
      const data = cleanUpResponse(res);
      const { message } = data;
      dispatch(updateMessage(message));
    })
    .catch((res) => {
      const err = cleanUpErr(res);
      const message = err?.message;
      dispatch(isError(message ? message : res.message));
    });
};
