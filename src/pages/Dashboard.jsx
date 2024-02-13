import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logout } from "../store/asyncActions/userAsyncActions";
import { Logout } from "../utils/Logout";
import toast from "react-hot-toast";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userDetails);
  const verified = useSelector((state) => state.user.verified);
  const role = useSelector((state) => state.user.role);
  const message = useSelector((state) => state.user.message);

  const handleLogout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    if (message === "Logged out successfully") {
      Logout("Logged out successfully", "/");
    }
  }, [message, navigate]);

  useEffect(() => {
    if (!verified && role !== "customer") {
      navigate("/");
      toast.error("Login to continue");
    }
  }, [verified, role, navigate]);

  return (
    <main className="flex flex-col">
      <Header />
      <div className="flex flex-col gap-5 text-center items-center justify-center h-[70vh]">
        <h2 className="text-2xl text-gray-700">User Details</h2>
        <p className="text-lg text-gray-600">Name: {user.name}</p>
        <p className="text-lg text-gray-600">Email: {user.email}</p>
        <p className="text-lg text-gray-600">Phone: {user.phone}</p>
        <p className="text-lg text-gray-600">
          Referral Code: {user.referralCode}
        </p>
        <p className="text-lg text-gray-600">Referrals: {user.referrals}</p>
        <p className="text-lg text-gray-600">Bank Name: {user.bank}</p>
        <p className="text-lg text-gray-600">Account Name: {user.acct_name}</p>
        <p className="text-lg text-gray-600">Account Number: {user.acct_no}</p>
        <button
          className="px-8 h-10 bg-primary text-white font-[600] rounded-md"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <Footer />
    </main>
  );
}
