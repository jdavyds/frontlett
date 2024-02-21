import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isError, updateMessage } from "../../../store/slices/onboardSlice";
import toast from "react-hot-toast";
import { createInfo } from "../../../store/asyncActions/onboardAsyncActions";

export default function Pi() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.onboard.info);
  const [state, setState] = useState({
    email: user.email || "",
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    dob: user.dob || "",
    gender: user.gender || "",
    country: user.country || "",
    address: user.address || "",
    phone: user.phone || "",
    state: user.state || "",
    lga: user.lga || "",
    nationality: user.nationality || "",
    languages: user.languages || "",
    possibleLocation: user.possibleLocation || "",
  });

  const message = useSelector((state) => state.onboard.message);
  const error = useSelector((state) => state.onboard.error);
  const loading = useSelector((state) => state.onboard.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      state.firstName &&
      state.lastName &&
      state.dob &&
      state.gender &&
      state.country &&
      state.address &&
      state.phone &&
      state.state &&
      state.lga &&
      state.nationality &&
      state.languages &&
      state.possibleLocation
    ) {
      const formDetails = new FormData();
      formDetails.append("firstName", state.firstName);
      formDetails.append("lastName", state.lastName);
      formDetails.append("dob", state.dob);
      formDetails.append("gender", state.gender);
      formDetails.append("country", state.country);
      formDetails.append("address", state.address);
      formDetails.append("phone", state.phone);
      formDetails.append("state", state.state);
      formDetails.append("lga", state.lga);
      formDetails.append("nationality", state.nationality);
      formDetails.append("languages", state.languages);
      formDetails.append("possibleLocation", state.possibleLocation);
      dispatch(createInfo(formDetails));
    }
  };

  useEffect(() => {
    if (message === "User Info Updated") {
      toast.success(message);
      navigate("/onboard/virtualt/activate/educational-information");
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
      <div className="w-full bg-white flex flex-col md:grid grid-cols-2 gap-10 rounded-2xl shadow-2xl px-5 md:px-20 py-10 md:py-20">
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
            value={state.firstName}
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
            value={state.lastName}
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
            value={state.dob}
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, dob: e.target.value })}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Gender</span>
          <select
            required
            defaultValue={state.gender}
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, gender: e.target.value })}
          >
            <option value="">Select </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span>Country</span>
          <input
            type="text"
            placeholder="Enter country"
            required
            value={state.country}
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
            value={state.phone}
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
            value={state.address}
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
            value={state.state}
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
            value={state.lga}
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
            value={state.nationality}
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
            value={state.languages}
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) => setState({ ...state, languages: e.target.value })}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Possible Location</span>
          <input
            type="text"
            placeholder="Enter possible location"
            required
            value={state.possibleLocation}
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
