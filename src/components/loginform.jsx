import { useRef, useContext } from "react";
import { AppProvider } from "../store.jsx";
import HeroPicture from "./images/heropicture.png";
import Input from "./ui_components/input.jsx";
import { supabase } from "../supabase-client";

const LoginForm = ({ setSelected }) => {
  const userName = useRef();
  const password = useRef();
  const { setCurrUserData, setDoctorData, setPatientData } =
    useContext(AppProvider);
  async function Submit(event) {
    event.preventDefault();
    setSelected("logging");
    const UserName = userName.current.value;
    const Password = password.current.value;

    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", UserName)
      .single();

    if (error) {
      setSelected("login");
      alert("Username does not exists!");
      return;
    }

    if (UserName != user.username || Password != user.passwordhash) {
      setSelected("login");
      alert("Username or Password is incorrect");
      return;
    }

    //success case
    //setting the current user data of the patient
    if (user.role == "Patient") {
      const userRes = await supabase
        .from("patients")
        .select("*")
        .eq("userid", user.userid)
        .single();

      if (userRes.error) {
        console.log("Error while fetching patient details: ", userRes.error);
      } else {
        setCurrUserData(userRes.data);
      }
    } //setting the current user data of the doctor
    else if (user.role == "Doctor") {
      const userRes = await supabase
        .from("doctors")
        .select("*")
        .eq("userid", user.userid)
        .single();
      if (userRes.error) {
        console.log("Error while fetching doctor details: ", userRes.error);
      } else {
        setCurrUserData(userRes.data);
      }
    }
    const patientRes = await supabase.from("patients").select("*");
    if (patientRes.error) {
      console.log("Patients could not be extracted!");
    } else {
      setPatientData(patientRes.data);
    }
    const doctorRes = await supabase
      .from("doctors")
      .select("*")
      .order("firstname", { ascending: true })
      .order("lastname", { ascending: true });
    if (doctorRes.error) {
      console.log("doctor data could not be extracted");
    } else {
      setDoctorData(doctorRes.data);
    }
    setSelected("logged");
  }
  return (
    <div className="h-100 flex items-center justify-center lg:pt-20 gap-x-20">
      <div>
        <img
          src={HeroPicture}
          alt=""
          className="h-[70vh] w-[80vw] lg:w-[38vw]"
        />
      </div>
      <div className="w-0.5 h-100 bg-gray-400 mx-10"></div>
      <form
        action=""
        className="h-90 w-80 lg:h-80 lg:w-75 rounded-2xl p-5 lg:p-8 lg:space-y-7 space-y-13 border-1 lg:border-2 border-slate-400 mr-60 lg:mr-20 mt-15 lg:mt-0"
        onSubmit={Submit}
      >
        <h1 className="text-xl lg:text-md text-center">
          Welcome to{" "}
          <span className="text-[#2274A5] font-bold">HealthSync</span>!
        </h1>
        <div className="space-y-4">
          <div className="place-self-center">
            <Input name="Username" ref={userName} type="text"></Input>
          </div>
          <div className="place-self-center">
            <Input name="Password" ref={password} type="password"></Input>
          </div>
        </div>
        <div className="place-self-center">
          <button className="mt-2 h-8 w-60 bg-[#2274A5] rounded-2xl text-white font-bold hover:bg-white hover:text-[#2274A5] hover:inset-ring-2 hover:inset-ring-[#2274A5] transition-all duration-150 ease-linear cursor-pointer">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
