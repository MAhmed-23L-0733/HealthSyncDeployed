import { createContext, useState } from "react";

export const AppProvider = createContext({
  currUserData: {},
  setCurrUserData: () => {},
  currPage: "",
  setCurrPage: () => {},
  setMedicalHistory: () => {},
  medicalHistory: {},
  doctorData: [],
  setDoctorData: () => {},
  specializationPage: "",
  setSpecializationPage: () => {},
  appointmentData: [],
  setAppointmentData: () => {},
  switchBtn: false,
  setSwitchBtn: () => {},
  patientData: [],
  setPatientData: () => {},
  feedbacks: [],
  setFeedBacks: () => {},
});

const Provider = ({ children }) => {
  const [currUserData, setCurrUserData] = useState({});
  const [currPage, setCurrPage] = useState("home");
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [doctorData, setDoctorData] = useState([]);
  const [switchBtn, setSwitchBtn] = useState(false);
  const [patientData, setPatientData] = useState([]);
  const [feedBacks, setFeedBacks] = useState([]);
  let [specializationPage, setSpecializationPage] = useState("");
  const [appointmentData, setAppointmentData] = useState([]);
  return (
    <AppProvider.Provider
      value={{
        currUserData,
        setCurrUserData,
        currPage,
        setCurrPage,
        setMedicalHistory,
        medicalHistory,
        doctorData,
        setDoctorData,
        specializationPage,
        setSpecializationPage,
        appointmentData,
        setAppointmentData,
        switchBtn,
        setSwitchBtn,
        patientData,
        setPatientData,
        feedBacks,
        setFeedBacks,
      }}
    >
      {children}
    </AppProvider.Provider>
  );
};

export default Provider;
