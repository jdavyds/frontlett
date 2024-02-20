import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isError, updateMessage } from "../../../store/slices/userSlice";
import toast from "react-hot-toast";

export default function Work() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    companyName: "",
    companyEmail: "",
    logo: "",
  });
  const link = useSelector((state) => state.user.link);
  const message = useSelector((state) => state.user.message);
  const error = useSelector((state) => state.user.error);
  const loading = useSelector((state) => state.user.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/onboard/employer/job-information");
  };

  const [logoUrl, setLogoUrl] = useState(null);

  useEffect(() => {
    if (state.dp) {
      setLogoUrl(URL.createObjectURL(state.dp));
    }
  }, [state.dp]);

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
      <div className="w-full bg-white flex flex-col md:grid grid-cols-2 gap-10 rounded-2xl shadow-2xl px-5 md:px-20 py-10 md:py-20">
        <div className="flex flex-col col-span-2">
          <span className="text-[#C4C4C4] text-sm">2/3</span>
          <h1 className="text-secondary font-bold text-2xl md:text-3xl">
            Work Information
          </h1>
        </div>

        <label className="flex flex-col gap-2 col-span-2">
          <span>Name of Company (or Project)</span>
          <input
            type="text"
            placeholder=""
            required
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) =>
              setState({ ...state, companyName: e.target.value })
            }
          />
        </label>
        <label className="flex flex-col gap-2 col-span-2">
          <span>Company Email (optional)</span>
          <input
            type="email"
            placeholder=""
            className="w-full border rounded-md bg-inherit h-12 px-5"
            onChange={(e) =>
              setState({ ...state, companyEmail: e.target.value })
            }
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Company Logo</span>
          <div className="flex gap-4 items-center">
            <figure className="w-28 h-28 rounded bg-[#C4C4C4] flex justify-center items-center">
              {logoUrl && (
                <img src={logoUrl} alt="Display" className="object-contain" />
              )}
            </figure>
            <nav className="relative border h-12 w-fit px-10 rounded bg-inherit flex items-center justify-center">
              Upload Logo
              <input
                type="file"
                className="border rounded-md bg-inherit h-full w-full opacity-0 absolute top-0 left-0 cursor-pointer"
                onChange={(e) => setState({ ...state, dp: e.target.files[0] })}
              />
            </nav>
          </div>
        </label>
      </div>
      <div className="flex justify-between items-center gap-5">
        <button
          type="button"
          className="w-fit border text-[#00000087] border-[#00000087] bg-inherit font-medium rounded-md flex justify-center items-center px-10 h-12"
          onClick={() =>
            navigate("/onboard/employer")
          }
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
