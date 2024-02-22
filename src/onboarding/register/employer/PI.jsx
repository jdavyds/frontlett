import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isError, updateMessage } from "../../../store/slices/userSlice";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { register } from "../../../store/asyncActions/userAsyncActions";

export default function Pi() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showP1, setShowP1] = useState(false);
  const [showP2, setShowP2] = useState(false);
  const [state, setState] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
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
      formDetails.append("role", "employer");
      dispatch(register(formDetails));
    }
  };

  useEffect(() => {
    if (message === "User Created") {
      toast.success(message);
      navigate("/onboard/employer/work-information");
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
    <form
      className="flex flex-col gap-10 md:w-1/2 mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="w-full bg-white flex flex-col gap-10 rounded-2xl shadow-2xl px-5 md:px-20 py-10 md:py-20">
        <div className="flex flex-col col-span-2">
          <span className="text-[#C4C4C4] text-sm">1/3</span>
          <h1 className="text-secondary font-bold text-2xl md:text-3xl">
            Personal Information
          </h1>
        </div>
        <label className="flex flex-col gap-2">
          <span>Username</span>
          <input
            type="text"
            placeholder="Enter username"
            required
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, username: e.target.value })}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Email</span>
          <input
            type="email"
            placeholder="Enter email"
            required
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </label>
        <label className="flex flex-col gap-1 w-full relative">
          <span>Password</span>
          <input
            type={showP1 ? "text" : "password"}
            placeholder="Minimum of 6 characters"
            required
            className="h-12 px-3 border z-10 w-full py-5 rounded-md bg-inherit outline-none"
            value={state.password}
            onChange={(e) =>
              setState((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowP1(!showP1);
            }}
            className="absolute right-3 bottom-3 z-10"
          >
            {showP1 ? (
              <FaEyeSlash className="text-gray-400" />
            ) : (
              <FaEye className="text-gray-400" />
            )}
          </button>
        </label>
        <label className="flex flex-col gap-1 w-full relative">
          <span>Confirm Password</span>
          <input
            type={showP2 ? "text" : "password"}
            placeholder="Confirm Password"
            className="h-12 px-3 border z-10 w-full py-5 rounded-md bg-inherit outline-none"
            value={state.confirmPassword}
            onChange={(e) =>
              setState((prevState) => ({
                ...prevState,
                confirmPassword: e.target.value,
              }))
            }
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowP2(!showP2);
            }}
            className="absolute right-3 bottom-3 z-10"
          >
            {showP2 ? (
              <FaEyeSlash className="text-gray-400" />
            ) : (
              <FaEye className="text-gray-400" />
            )}
          </button>
        </label>
      </div>
      <button
        type="submit"
        className={`w-fit bg-primary font-medium text-white rounded-md flex justify-center items-center px-10 ml-auto h-12
        ${loading ? "animate-pulse duration-500 cursor-not-allowed" : ""}`}
      >
        Continue
      </button>
    </form>
  );
}
