import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isError, updateMessage } from "../../../store/slices/userSlice";
import toast from "react-hot-toast";


export default function Pi() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    location: "",
    country: "",
    address: "",
    phone: "",
    state: "",
    lga: "",
    nationality: "",
    languages: "",
    possibleLocation: "",
  });
  const link = useSelector((state) => state.user.link);
  const message = useSelector((state) => state.user.message);
  const error = useSelector((state) => state.user.error);
  const loading = useSelector((state) => state.user.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/onboarding/virtualt/activate/educational-information");
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
    <form className="flex flex-col gap-10 md:w-1/2 mx-auto" onSubmit={handleSubmit}>
      <div className="w-full bg-white flex flex-col md:grid grid-cols2 gap-10 rounded-2xl shadow-2xl px-5 md:px-20 py-10 md:py-20">
        <div className="flex flex-col col-span-2">
          <span className="text-[#C4C4C4] text-sm">1/4</span>
          <h1 className="text-secondary font-bold text-2xl md:text-3xl">
            Personal Information
          </h1>
        </div>
        <label className="flex flex-col gap-2">
          <span>First Name</span>
          <input
            type="text"
            placeholder="Enter first name"
            required
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, firstName: e.target.value })}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Last Name</span>
          <input
            type="text"
            placeholder="Enter last name"
            required
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, lastName: e.target.value })}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Date of Birth</span>
          <input
            type="date"
            placeholder="Enter date of birth"
            required
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, dob: e.target.value })}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Gender</span>
          <select
            required
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, gender: e.target.value })}
          >
            <option value="">Select </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span>Location</span>
          <input
            type="text"
            placeholder="Enter location"
            required
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, location: e.target.value })}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Country</span>
          <input
            type="text"
            placeholder="Enter country"
            required
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, country: e.target.value })}
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
          <span>Address</span>
          <input
            type="text"
            placeholder="Enter address"
            required
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, address: e.target.value })}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>State</span>
          <input
            type="text"
            placeholder="Enter state"
            required
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, state: e.target.value })}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>LGA</span>
          <input
            type="text"
            placeholder="Enter lga"
            required
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, lga: e.target.value })}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Nationality</span>
          <input
            type="text"
            placeholder="Enter nationality"
            required
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) =>
              setState({ ...state, nationality: e.target.value })
            }
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Languages</span>
          <input
            type="text"
            placeholder="Enter languages"
            required
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, languages: e.target.value })}
          />
        </label>
        <label className="flex flex-col gap-2 col-span-2">
          <span>Possible Location</span>
          <input
            type="text"
            placeholder="Enter possible location"
            required
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) =>
              setState({ ...state, possibleLocation: e.target.value })
            }
          />
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
