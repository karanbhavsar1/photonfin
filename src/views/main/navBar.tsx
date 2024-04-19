import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLayout } from "store/theme/themeSlice";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <div className="flex ">
        <p>Home</p>
        <p>Screens</p>
      </div>
      <div>
        <p>Login</p>
      </div>
    </div>
  );
}
