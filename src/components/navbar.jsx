import { useContext, useState } from "react";
import logo from "./images/logo.png";
import { AppProvider } from "../store";
import NavbarButtons from "./navbarbuttons.jsx";
import Switch from "./ui_components/optionsbutton.jsx";
import LogoutButton from "./ui_components/logoutbutton.jsx";
function getRandomHexColor() {
  let colour = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
  return colour;
}
const Navbar = ({ selected, setSelected, setSignup }) => {
  const { currUserData, switchBtn, setSwitchBtn } = useContext(AppProvider);
  let [colour, setColour] = useState(getRandomHexColor());
  const now = new Date();
  return (
    <div className="bg-white h-15 lg:h-20 w-full border-b-2 border-gray-300 flex items-center justify-between px-2 lg:px-10 shadow-md fixed z-10 top-0">
      <div>
        <img src={logo} alt="logo" className="h-13 w-35 lg:h-18  lg:w-50" />
      </div>
      {/* during signup buttons */}
      {(selected == "login" || selected == "signup") && (
        <div className="space-x-5">
          <button
            className={`lg:text-md cursor-pointer ${
              selected == "login" && "border-b-2"
            } hover:border-b-2`}
            onClick={() => {
              setSelected("login");
              setSignup("roleselect");
            }}
          >
            Login
          </button>
          <button
            className={`lg:text-md cursor-pointer ${
              selected == "signup" && "border-b-2"
            } hover:border-b-2`}
            onClick={() => {
              setSelected("signup");
            }}
          >
            Signup
          </button>
        </div>
      )}

      {selected == "logged" && (
        <div className="flex items-center gap-x-2">
          {/* good morning message */}
          {now.getHours() >= 7 && now.getHours() < 12 && (
            <p
              className={`text-[10px] lg:text-sm w-10 ${
                currUserData.role == "Doctor" && "lg:w-40"
              }`}
            >{`Good Morning, ${currUserData.role == "Doctor" ? "Dr. " : ""} ${
              currUserData.lastname
            }`}</p>
          )}
          {/* good afternoon message */}
          {now.getHours() >= 12 && now.getHours() < 18 && (
            <p
              className={`text-[10px] lg:text-sm w-10 ${
                currUserData.role == "Doctor" && "lg:w-40"
              }`}
            >{`Good Afternoon, ${currUserData.role == "Doctor" ? "Dr. " : ""} ${
              currUserData.lastname
            }`}</p>
          )}
          {/* good evening message */}
          {now.getHours() >= 18 && (
            <p
              className={`text-[10px] lg:text-sm w-10 ${
                currUserData.role == "Doctor" && "lg:w-40"
              }`}
            >{`Good Evening, ${currUserData.role == "Doctor" ? "Dr. " : ""} ${
              currUserData.lastname
            }`}</p>
          )}
          {/* good night message */}
          {now.getHours() >= 0 && now.getHours() < 7 && (
            <p
              className={`text-[10px] lg:text-sm w-10 lg:w-35 ${
                currUserData.role == "Doctor" && "lg:w-40"
              }`}
            >{`Good Night, ${currUserData.role == "Doctor" ? "Dr. " : ""}  ${
              currUserData.lastname
            }`}</p>
          )}
          <div
            className="rounded-full h-10 w-10 flex justify-center items-center text-white lg:text-xl border-2 border-green-500"
            style={{ background: `${colour}` }}
          >
            <p>{currUserData.lastname[0]}</p>
          </div>
          <div>
            <Switch switchBtn={switchBtn} setSwitchBtn={setSwitchBtn}></Switch>
          </div>
          <div
            id="buttons"
            className={`fixed h-105 w-full top-15 right-0 lg:top-22 lg:right-2 lg:h-[80vh] lg:w-100 bg-white p-10 shadow-black shadow-md z-20 ${
              switchBtn ? "translate-x-0" : "translate-x-600"
            } transition-transform duration-300`}
          >
            <NavbarButtons></NavbarButtons>
            <div className="fixed right-8 bottom-5 lg:bottom-5">
              <LogoutButton
                setSignup={setSignup}
                setSelected={setSelected}
              ></LogoutButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
