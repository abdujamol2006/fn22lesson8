import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { SlBasket } from "react-icons/sl";
import { BiLogoRedux } from "react-icons/bi";
function themeFromLocalStorage() {
  return localStorage.getItem("theme") || "winter";
}
function header() {
  const [theme, setTheme] = useState(themeFromLocalStorage());
  const handleTheme = () => {
    const newTheme = theme == "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className="bg-base-200 mb-10">
      <div className="navbar site-container">
        <div className="navbar-start">
          <Link to="/">
            <BiLogoRedux className="w-100" />
          </Link>
        </div>{" "}
        <nav className="navbar-center">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </nav>
        <div className="korzinka">
          <Link to="/korzinka">
            <SlBasket />
          </Link>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              onClick={handleTheme}
              type="checkbox"
              checked={theme == "dracula"}
              readOnly
            />

            {/* sun icon */}
            <IoSunnySharp className="swap-on fill-current w-10 h-10" />
            {/* moon icon */}
            <IoMoonSharp className="swap-off fill-current w-10 h-10" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default header;
