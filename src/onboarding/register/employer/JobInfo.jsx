import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isError, updateMessage } from "../../../store/slices/onboardSlice";
import toast from "react-hot-toast";
import { createWork } from "../../../store/asyncActions/onboardAsyncActions";
export default function JobInfo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.onboard.jobInfo);
  const [state, setState] = useState({
    category: user?.category || "",
    description: user?.description || "",
    specification: user?.specification || "",
    file: user?.file || "",
    nature: user?.nature || "",
    option: user?.option || "",
    skills: user?.skills || "",
    level: user?.level || "",
    no: user?.no || "",
    budget: user?.budget || "",
    start: user?.start || "",
  });

  const message = useSelector((state) => state.onboard.message);
  const error = useSelector((state) => state.onboard.error);
  const loading = useSelector((state) => state.onboard.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    if (
      state.category &&
      state.description &&
      state.specification &&
      state.nature &&
      state.option &&
      state.skills &&
      state.level &&
      state.no &&
      state.budget &&
      state.start
    ) {
      const formDetails = new FormData();
      formDetails.append("category", state.category);
      formDetails.append("description", state.description);
      formDetails.append("specification", state.specification);
      formDetails.append("file", state.file);
      formDetails.append("nature", state.nature);
      formDetails.append("option", state.option);
      formDetails.append("skills", state.skills);
      formDetails.append("level", state.level);
      formDetails.append("no", state.no);
      formDetails.append("budget", state.budget);
      formDetails.append("start", state.start);
      dispatch(createWork(formDetails));
    }
  };

  useEffect(() => {
    if (message === "Employer Job Information Updated") {
      toast.success(message);
      navigate("/");
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
          <span className="text-[#C4C4C4] text-sm">3/3</span>
          <h1 className="text-secondary font-bold text-2xl md:text-3xl">
            Job Information
          </h1>
        </div>
        <label className="flex flex-col gap-2 col-span-2">
          <span>Job Category</span>
          <select
            required
            value={state.category}
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, category: e.target.value })}
          >
            <option value="">Select</option>
            <option value="frontend">Front-End Developer</option>
            <option value="backend">Back-End Developer</option>
            <option value="fullstack">Fullstack Developer</option>
            <option value="mobile">Mobile Developer</option>
            <option value="uiux">UI/UX Designer</option>
            <option value="graphics">Graphics Designer</option>
            <option value="video">Video Editor</option>
            <option value="content">Content Writer</option>
            <option value="seo">SEO Specialist</option>
            <option value="digital">Digital Marketer</option>
            <option value="sales">Sales Representative</option>
          </select>
        </label>
        <label className="flex flex-col gap-2 col-span-2">
          <span>Job Description</span>
          <textarea
            className="w-full border rounded-md bg-inherit h-32 px-5 py-5"
            required
            value={state.description}
            onChange={(e) =>
              setState({ ...state, description: e.target.value })
            }
          />
        </label>
        <label className="flex flex-col gap-2 col-span-2">
          <span>Employee Specification</span>
          <textarea
            className="w-full border rounded-md bg-inherit h-32 px-5 py-5"
            required
            value={state.specification}
            onChange={(e) =>
              setState({ ...state, specification: e.target.value })
            }
          />
        </label>
        <label className="flex items-center gap-2">
          <span>Upload Project File (Optional)</span>
          <div className="flex gap-4 items-center">
            <nav className="relative border h-12 w-fit px-10 rounded bg-inherit flex items-center justify-center">
              Upload File
              <input
                type="file"
                value={state.file}
                className="border rounded-md bg-inherit h-full w-full opacity-0 absolute top-0 left-0 cursor-pointer"
                onChange={(e) =>
                  setState({ ...state, file: e.target.files[0] })
                }
              />
            </nav>
          </div>
        </label>
        <label className="flex flex-col gap-2 col-span-2">
          <span>Nature of Project</span>
          <select
            required
            value={state.nature}
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, nature: e.target.value })}
          >
            <option value="">Select</option>
            <option value="new">New Project</option>
            <option value="existing">Existing Project</option>
          </select>
        </label>
        <label className="flex flex-col gap-2 col-span-2">
          <span>Preferred work option</span>
          <select
            required
            value={state.option}
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, option: e.target.value })}
          >
            <option value="">Select</option>
            <option value="remote">Remote</option>
            <option value="office">Office</option>
          </select>
        </label>
        <label className="flex flex-col gap-2 col-span-2">
          <span>
            What skills and expertise are most important to you on this project
            ?
          </span>
          <textarea
            required
            value={state.skills}
            className="w-full border rounded-md bg-inherit h-32 px-5 py-5"
            onChange={(e) => setState({ ...state, skills: e.target.value })}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Level of Experience Required for this Project</span>
          <select
            required
            value={state.level}
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, level: e.target.value })}
          >
            <option value="">Select</option>
            <option value="entry">Entry Level</option>
            <option value="intermediate">Intermediate</option>
            <option value="senior">Senior</option>
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span>Number of Virtualt Required for this Project</span>
          <select
            required
            value={state.no}
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, no: e.target.value })}
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
        <label className="flex flex-col gap-2 col-span-2">
          <span>Do you have a budget?</span>
          <textarea
            required
            value={state.budget}
            className="w-full border rounded-md bg-inherit h-32 px-5 py-5"
            onChange={(e) => setState({ ...state, budget: e.target.value })}
          />
        </label>
        <label className="flex flex-col gap-2 col-span-2">
          <span>Proposed Start Date</span>
          <input
            type="date"
            required
            value={state.start}
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, start: e.target.value })}
          />
        </label>
      </div>
      <div className="flex justify-between items-center gap-5">
        <button
          type="button"
          className="w-fit border border-[#00000087] bg-inherit font-medium rounded-md flex justify-center items-center px-10 h-12"
          onClick={() => navigate("/onboard/virtualt/activate")}
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
