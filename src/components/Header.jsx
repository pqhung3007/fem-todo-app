import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/themeSlice";
import moonIcon from "../images/icon-moon.svg";
import sunIcon from "../images/icon-sun.svg";

function Header() {
  const { lightMode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between mb-4">
      <h1 className="text-3xl text-white font-bold uppercase tracking-[0.6rem]">
        todo
      </h1>
      <button onClick={() => dispatch(toggleTheme())}>
        <img src={lightMode ? moonIcon : sunIcon} alt="" className="w-8 h-8" />
      </button>
    </div>
  );
}

export default Header;
