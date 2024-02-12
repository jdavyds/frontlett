import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isError, updateMessage } from "../../store/slices/userSlice";
import toast from "react-hot-toast";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { register } from "../../store/asyncActions/userAsyncActions";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showP1, setShowP1] = useState(false);
  const [showP2, setShowP2] = useState(false);
  const [state, setState] = useState({
    email: "",
    name: "",
    password: "",
    verifyPassword: "",
    company: "",
    phone: "",
    bank: "",
    acct_name: "",
    acct_no: "",
  });
  const link = useSelector((state) => state.user.link);
  const message = useSelector((state) => state.user.message);
  const error = useSelector((state) => state.user.error);
  const loading = useSelector((state) => state.user.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.password !== state.verifyPassword)
      toast.error("Passwords do not match");
    if (state.password.length < 6) toast.error("Password too short");
    if (
      state.email &&
      state.name &&
      state.company &&
      state.phone &&
      state.password &&
      state.verifyPassword &&
      state.bank &&
      state.acct_name &&
      state.acct_no
    ) {
      const formDetails = new FormData();
      formDetails.append("email", state.email);
      formDetails.append("name", state.name);
      formDetails.append("company", state.company);
      formDetails.append("phone", state.phone);
      formDetails.append("password", state.password);
      formDetails.append("bank", state.bank);
      formDetails.append("acct_name", state.acct_name);
      formDetails.append("acct_no", state.acct_no);
      dispatch(register(formDetails));
    }
  };

  useEffect(() => {
    if (message === "Registration Successful") {
      toast.success(message);
      dispatch(updateMessage(""));
      window.location.assign(link);
    }
  }, [navigate, message, dispatch, link]);

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
          Complete Registration
        </h3>
        <p className="md:w-1/3">
          Lorem ipsum dolor sit amet consectet tempor dolor sit amet Lorem ipsum
          dolor sit amet consectet tempor dolor sit amet
        </p>
      </div>
      <div className="w-full">
        <form
          className="md:w-1/2 -translate-y-[10%] mx-auto bg-white flex flex-col md:grid grid-cols2 gap-10 rounded-2xl shadow-2xl px-5 md:px-20 py-10 md:py-20"
          onSubmit={handleSubmit}
        >
          <h1 className="mx-auto text-2xl col-span-2">Enter Information</h1>
          <label className="flex flex-col gap-2">
            <span>Name</span>
            <input
              type="text"
              placeholder="Enter full name"
              required
              className="w-full border rounded-md bg-inherit h-12 px-5"
              onChange={(e) => setState({ ...state, name: e.target.value })}
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
          <label className="flex flex-col gap-2">
            <span>
              Company{" "}
              <small className="text-gray-600 inline">(for employers)</small>{" "}
            </span>
            <input
              type="text"
              placeholder="Enter company name"
              required
              className="w-full border rounded-md bg-inherit h-12 px-5"
              onChange={(e) => setState({ ...state, company: e.target.value })}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>Phone</span>
            <input
              type="tel"
              placeholder="Enter phone number"
              required
              className="w-full border rounded-md bg-inherit h-12 px-5"
              onChange={(e) => setState({ ...state, phone: e.target.value })}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>Bank</span>
            <input
              type="text"
              placeholder="Enter bank name"
              required
              className="w-full border rounded-md bg-inherit h-12 px-5"
              onChange={(e) => setState({ ...state, bank: e.target.value })}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>Account Name</span>
            <input
              type="text"
              placeholder="Enter account name"
              required
              className="w-full border rounded-md bg-inherit h-12 px-5"
              onChange={(e) =>
                setState({ ...state, acct_name: e.target.value })
              }
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>Account Number</span>
            <input
              type="text"
              placeholder="Enter account number"
              required
              className="w-full border rounded-md bg-inherit h-12 px-5"
              onChange={(e) => setState({ ...state, acct_no: e.target.value })}
            />
          </label>
          <label className="flex flex-col gap-1 w-full relative">
            <span>Password</span>
            <input
              type={showP1 ? "text" : "password"}
              placeholder="Enter Password"
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
          <button
            type="submit"
            className={`w-full col-span-2 bg-secondary font-medium text-white rounded-md flex justify-center items-center px-5 h-12
            ${loading ? "animate-pulse duration-500 cursor-not-allowed" : ""}`}
          >
            Continue
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
}
