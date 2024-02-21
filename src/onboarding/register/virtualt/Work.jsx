import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isError, updateMessage } from "../../../store/slices/onboardSlice";
import toast from "react-hot-toast";
import { createWorkHistory } from "../../../store/asyncActions/onboardAsyncActions";

export default function Work() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.onboard.workHistory);
  const [state, setState] = useState({
    organization: user.organization || "",
    role: user.role || "",
    from: user.from || "",
    to: user.to || "",
    area: user.area || "",
    minimum: user.minimum || "",
    time: user.time || "",
  });
  
  const message = useSelector((state) => state.onboard.message);
  const error = useSelector((state) => state.onboard.error);
  const loading = useSelector((state) => state.onboard.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      state.organization &&
      state.role &&
      state.from &&
      state.to &&
      state.area &&
      state.minimum &&
      state.time
    ) {
      const formDetails = new FormData();
      formDetails.append("organization", state.organization);
      formDetails.append("role", state.role);
      formDetails.append("workFrom", state.from);
      formDetails.append("workTo", state.to);
      formDetails.append("specialization", state.area);
      formDetails.append("willWork", state.minimum);
      formDetails.append("workTime", state.time);
      dispatch(createWorkHistory(formDetails));
    }
  };

  useEffect(() => {
    if (message === "User Work History Updated") {
      toast.success(message);
      navigate("/onboard/virtualt/activate/skill");
      dispatch(updateMessage(""));
    }
  }, [navigate, message, dispatch,]);

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
      <div className="w-full bg-white flex flex-col md:grid grid-cols-2 gap-10 rounded-2xl shadow-2xl px-5 md:px-20 py-10 md:py-20">
        <div className="flex flex-col col-span-2">
          <span className="text-[#C4C4C4] text-sm">3/4</span>
          <h1 className="text-secondary font-bold text-2xl md:text-3xl">
            Work History
          </h1>
        </div>

        <label className="flex flex-col gap-2 col-span-2">
          <span>Name of Organization</span>
          <input
            type="text"
            placeholder="Enter organization"
            required
            value={state.organization}
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) =>
              setState({ ...state, organization: e.target.value })
            }
          />
        </label>
        <label className="flex flex-col gap-2 col-span-2">
          <span>Role</span>
          <input
            type="text"
            placeholder="Enter role"
            required
            value={state.role}
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, role: e.target.value })}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>From</span>
          <input
            type="date"
            placeholder="Enter start date"
            required
            value={state.from}
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, from: e.target.value })}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>To</span>
          <input
            type="date"
            placeholder="Enter end date"
            required
            value={state.to}
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, to: e.target.value })}
          />
        </label>
        <label className="flex flex-col gap-2 col-span-2">
          <span>Area of Specialization</span>
          <input
            type="text"
            placeholder="Enter area of specialization"
            required
            value={state.area}
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, area: e.target.value })}
          />
        </label>
        <label className="flex flex-col gap-2 col-span-2">
          <span>
            Are You Willing To Work For Companies That Require A Minimum Of 2
            Slots?
          </span>
          <select
            required
            value={state.minimum}
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, minimum: e.target.value })}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span>Preferred Work Time</span>
          <select
            required
            value={state.time}
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, time: e.target.value })}
          >
            <option value="">Select</option>
            <option value="9am - 5pm">9am - 5pm</option>
            <option value="8am - 4pm">8am - 4pm</option>
            <option value="10am - 6pm">10am - 6pm</option>
            <option value="11am - 7pm">11am - 7pm</option>
            <option value="12pm - 8pm">12pm - 8pm</option>
          </select>
        </label>
      </div>
      <div className="flex justify-between items-center gap-5">
        <button
          type="button"
          className="w-fit border text-[#00000087] border-[#00000087] bg-inherit font-medium rounded-md flex justify-center items-center px-10 h-12"
          onClick={() => navigate("/onboard/virtualt/activate/educational-information")}
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
