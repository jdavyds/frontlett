import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isError, updateMessage } from "../../store/slices/userSlice";
import toast from "react-hot-toast";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { verifyCode } from "../../store/asyncActions/userAsyncActions";

export default function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState("");
  const message = useSelector((state) => state.user.message);
  const error = useSelector((state) => state.user.error);
  const loading = useSelector((state) => state.user.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state) {
      const formDetails = new FormData();
      formDetails.append("code", state);
      dispatch(verifyCode(formDetails));
    }
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      navigate("/register");
      dispatch(updateMessage(""));
    }
  }, [navigate, message, dispatch, state.email]);
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
        <h3 className="font-bold text-2xl md:text-[40px]">Referral</h3>
        <p className="md:w-1/3">
          Lorem ipsum dolor sit amet consectet tempor dolor sit amet Lorem ipsum
          dolor sit amet consectet tempor dolor sit amet
        </p>
      </div>
      <div className="w-full">
        <form
          className="md:w-1/2 -translate-y-1/3 mx-auto bg-white flex flex-col gap-10 rounded-2xl shadow-2xl px-5 md:px-20 py-10 md:py-20"
          onSubmit={handleSubmit}
        >
          <h1 className="mx-auto text-2xl">Enter Referral Code</h1>
          <h1 className="mx-auto text-lg">Frontlett Code: 72839gj</h1>
          <label className="flex flex-col gap-2">
            <span>Referral Code</span>
            <input
              type="text"
              placeholder="Enter Invite Code"
              className="w-full border rounded-md bg-inherit h-12 px-5"
              onChange={(e) => setState(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className={`w-full bg-secondary font-medium text-white rounded-md flex justify-center items-center px-5 h-12
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
