import Provider from "./store.jsx";
import Navbar from "./components/navbar.jsx";
import LoginForm from "./components/loginform.jsx";
import SignupForm from "./components/signupform.jsx";
import PatientForm from "./components/patientform.jsx";
import DoctorForm from "./components/doctorform.jsx";
import Footer from "./components/footer.jsx";
import { useState } from "react";
import Loader from "./components/ui_components/loader.jsx";
import Home from "./components/home.jsx";
import Appointments from "./components/appointments.jsx";
import MedicalRecords from "./components/medicalrecords.jsx";
import MyAppointments from "./components/myappointments.jsx";
import Feedback from "./components/feedback.jsx";
function App() {
  let [selected, setSelected] = useState("login");
  let [signup, setsignup] = useState("roleselect");
  return (
    <>
      <Provider>
        <Navbar
          selected={selected}
          setSelected={setSelected}
          setSignup={setsignup}
        ></Navbar>
        <div className="pt-15 lg:pt-20">
          {selected == "login" && (
            <LoginForm setSelected={setSelected}></LoginForm>
          )}
          {selected == "signup" && signup == "roleselect" && (
            <SignupForm setsignup={setsignup}></SignupForm>
          )}
          {selected == "signup" && signup == "patient" && (
            <PatientForm setsignup={setsignup}></PatientForm>
          )}
          {selected == "signup" && signup == "doctor" && (
            <DoctorForm setsignup={setsignup}></DoctorForm>
          )}
          {selected == "logged" && <Home></Home>}
          {selected == "logged" && <Appointments></Appointments>}
          {selected == "logged" && <MedicalRecords></MedicalRecords>}
          {selected == "logged" && <MyAppointments></MyAppointments>}
          {selected == "logged" && <Feedback></Feedback>}
        </div>
        {selected == "logging" && <Loader></Loader>}
        <Footer></Footer>
      </Provider>
    </>
  );
}

export default App;
