import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isError, updateMessage } from "../../../store/slices/onboardSlice";
import toast from "react-hot-toast";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";
import { register } from "../../../store/asyncActions/userAsyncActions";

export default function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  })
  const message = useSelector((state) => state.user.message);
  const error = useSelector((state) => state.user.error);
  const loading = useSelector((state) => state.user.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.password && state.password !== state.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (state.email && state.username && state.password) {
      const formDetails = new FormData();
      formDetails.append("email", state.email);
      formDetails.append("username", state.username);
      formDetails.append("password", state.password);
      dispatch(register(formDetails));
    }
  };

  useEffect(() => {
    if (message === "User Created") {
      toast.success(message);
      navigate("/onboard/virtualt/activate");
      dispatch(updateMessage(""));
    }
  }, [navigate, message, dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(isError(""));
    }
  }, [error, dispatch]);

  return (
    <main className="flex flex-col">
      <Header />
      <div className="min-h-[50vh] bg-secondary text-white py-10 md:py-24 px-5 md:px-20 flex flex-col  items-center gap-10 text-center">
        <h3 className="font-bold text-2xl md:text-[40px]">
          Create a Virtualt account{" "}
        </h3>
        <p className="md:w-1/3">
          Lorem ipsum dolor sit amet consectet tempor dolor sit amet Lorem ipsum
          dolor sit amet consectet tempor dolor sit amet
        </p>
      </div>
      <div className="w-full">
        <form
          className="md:w-1/2 -translate-y-1/4 mx-auto bg-white flex flex-col gap-10 rounded-2xl shadow-2xl px-5 md:px-20 py-10 md:py-20"
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col gap-2">
            <span>Email</span>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full border rounded-md bg-inherit h-12 px-5"
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>Username</span>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full border rounded-md bg-inherit h-12 px-5"
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  username: e.target.value,
                }))
              }
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>Password</span>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border rounded-md bg-inherit h-12 px-5"
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>Confirm Password</span>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border rounded-md bg-inherit h-12 px-5"
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  confirmPassword: e.target.value,
                }))
              }
            />
          </label>
          <button
            type="submit"
            className={`w-full bg-secondary font-medium text-white rounded-md flex justify-center items-center px-5 h-12
            ${loading ? "animate-pulse duration-500 cursor-not-allowed" : ""}`}
          >
            Sign Up
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
}
