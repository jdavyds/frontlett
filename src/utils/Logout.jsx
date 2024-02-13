import toast from "react-hot-toast";
import { persistor } from "../main";

export function Logout(msg, route) {
  const notifyLogout = (err) => toast.success(err);

  persistor.purge().then(() => {
    window.localStorage.clear();
    notifyLogout(msg);
    window.location.replace(`${route}`);
  });
}
