import { useContext } from "react";
import { AppProvider } from "../store";
const NavbarButtons = () => {
  const { setCurrPage, setSpecializationPage, setSwitchBtn, currUserData } =
    useContext(AppProvider);
  return (
    <>
      <div id="patient buttons" className="space-y-5">
        <div className="border-b-2 p-2 hover:text-[#2274A5]  transition-all duration-150 ease-linear">
          <button
            className="text-sm lg:text-xl cursor-pointer"
            onClick={() => {
              setCurrPage("home");
              setSwitchBtn(false);
            }}
          >
            Home
          </button>
        </div>
        <div className="border-b-2 p-2 hover:text-[#2274A5] transition-all duration-150 ease-linear">
          <button
            className="text-sm lg:text-xl cursor-pointer"
            onClick={() => {
              setCurrPage("myappointments");
              setSwitchBtn(false);
            }}
          >
            My Appointments
          </button>
        </div>
        <div className="border-b-2 p-2 hover:text-[#2274A5] transition-all duration-150 ease-linear">
          <button
            className="text-sm lg:text-xl cursor-pointer"
            onClick={() => {
              setCurrPage("medical history");
              setSwitchBtn(false);
            }}
          >
            {currUserData.role == "Patient" && <p>Medical History</p>}
            {currUserData.role == "Doctor" && <p>My Medical Records</p>}
          </button>
        </div>
        {currUserData.role == "Patient" && (
          <div className="border-b-2 p-2 hover:text-[#2274A5] transition-all duration-150 ease-linear">
            <button
              className="text-sm lg:text-xl cursor-pointer"
              onClick={() => {
                setCurrPage("appointments");
                setSwitchBtn(false);
                setSpecializationPage("");
              }}
            >
              Book Appointment
            </button>
          </div>
        )}
        <div className="border-b-2 p-2 hover:text-[#2274A5] transition-all duration-150 ease-linear">
          <button
            className="text-sm lg:text-xl cursor-pointer"
            onClick={() => {
              setCurrPage("feedback");
              setSwitchBtn(false);
              setSpecializationPage("");
            }}
          >
            Feedback
          </button>
        </div>
      </div>
    </>
  );
};

export default NavbarButtons;
