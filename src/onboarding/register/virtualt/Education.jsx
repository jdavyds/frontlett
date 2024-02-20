import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isError, updateMessage } from "../../../store/slices/userSlice";
import toast from "react-hot-toast";
import { register } from "../../../store/asyncActions/userAsyncActions";

export default function Education() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    qualification: "",
    institution: "",
    from: "",
    to: "",
    course: "",
    degree: "",
  });
  const link = useSelector((state) => state.user.link);
  const message = useSelector((state) => state.user.message);
  const error = useSelector((state) => state.user.error);
  const loading = useSelector((state) => state.user.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/onboarding/virtualt/activate/work-history");
    if (
      state.qualification &&
      state.institution &&
      state.from &&
      state.to &&
      state.course &&
      state.degree
    ) {
      const formDetails = new FormData();
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
    <form
      className="flex flex-col gap-10 md:w-1/2 mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="w-full bg-white flex flex-col md:grid grid-cols2 gap-10 rounded-2xl shadow-2xl px-5 md:px-20 py-10 md:py-20">
        <div className="flex flex-col col-span-2">
          <span className="text-[#C4C4C4] text-sm">2/4</span>
          <h1 className="text-secondary font-bold text-2xl md:text-3xl">
            Education Information
          </h1>
        </div>
        <label className="flex flex-col gap-2 col-span-2">
          <span>Highest Qualification</span>
          <select
            required
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) =>
              setState({ ...state, qualification: e.target.value })
            }
          >
            <option value="">Select</option>
            <option value="BSc">BSc</option>
            <option value="MSc">MSc</option>
            <option value="PhD">PhD</option>
          </select>
        </label>
        <label className="flex flex-col gap-2 col-span-2">
          <span>Institution</span>
          <input
            type="text"
            placeholder="Enter institution"
            required
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) =>
              setState({ ...state, institution: e.target.value })
            }
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>From</span>
          <input
            type="date"
            required
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, from: e.target.value })}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>To</span>
          <input
            type="date"
            required
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, to: e.target.value })}
          />
        </label>
        <label className="flex flex-col gap-2 col-span-2">
          <span>Course of Study</span>
          <input
            type="text"
            placeholder="Enter course of study"
            required
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, course: e.target.value })}
          />
        </label>
      </div>
      <div className="flex justify-between items-center gap-5">
        <button
          type="button"
          className="w-fit border border-[#00000087] bg-inherit font-medium rounded-md flex justify-center items-center px-10 h-12"
          onClick={() => navigate("/onboarding/virtualt/activate")}
        >
          Back
        </button>
        <button
          type="submit"
          className={`w-fit bg-primary font-medium text-white rounded-md flex justify-center items-center px-10 ml-auto h-12
        ${loading ? "animate-pulse duration-500 cursor-not-allowed" : ""}`}
        >
          Continue
        </button>
      </div>
    </form>
  );
}
