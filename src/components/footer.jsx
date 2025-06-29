import logo from "./images/logo_without_bg.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#212738] mt-20 text-white lg:flex flex-wrap items-center justify-between p-5 lg:p-10 space-y-10 lg:space-y-0 text-center">
        <div className="mt-10 lg:mt-0 flex flex-wrap lg:w-70 justify-center">
          <img src={logo} alt="" className="h-20 w-50" />
          <p className="w-60 lg:w-70 text-gray-500">
            Book aapointments with the best doctors avilable just a touch away.
            Register now on the HealthSync to experience top notch healthcare
            services and much more.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-lg text-[#EDF2EF]">Major Cities</p>
          <div className="text-gray-500">
            <p>Lahore</p>
            <p>Islamabad</p>
            <p>Karachi</p>
            <p>Rawalpindi</p>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-lg text-[#EDF2EF]">Services</p>
          <div className="text-gray-500">
            <p>Healthcare</p>
            <p>Appointments</p>
            <p>Medical History</p>
            <p>Checkups</p>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-lg text-[#EDF2EF]">Top Hospitals</p>
          <div className="text-gray-500">
            <p>Doctors Hospital</p>
            <p>Hameed Lateef Hospital</p>
            <p>National Hospital</p>
            <p>Fatima Memorial Hospital</p>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-lg text-[#EDF2EF]">Email</p>
            <p className="text-gray-500">healthsync.support@gmail.com</p>
          </div>
          <div>
            <p className="text-lg text-[#EDF2EF]">Phone</p>
            <p className="text-gray-500">+92 320 4829214</p>
          </div>
          <p className="text-lg text-[#EDF2EF]">Contact us on</p>
          <div className="text-gray-500 flex justify-center gap-x-5">
            <a href="https://www.facebook.com/ahmed.irfan.5832/">
              <FaFacebookSquare className="hover:text-white transition-all duration-100 ease-linear cursor-pointer"></FaFacebookSquare>
            </a>
            <a href="https://www.instagram.com/irl_ahmed?igsh=MXFlb3BlaWdydGd5Yw%3D%3D">
              <FaInstagramSquare className="hover:text-white transition-all duration-100 ease-linear cursor-pointer"></FaInstagramSquare>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-ahmed-b62018313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FaLinkedin className="hover:text-white transition-all duration-100 ease-linear cursor-pointer"></FaLinkedin>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#212738] text-white items-center justify-center pt-10 pb-5 flex">
        <p className="text-gray-500">Copyright</p>
        <FaRegCopyright className="ml-2 mr-5 text-gray-500 mt-1" />
        <p className="text-gray-500">2025 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
