import { useContext } from "react";
import { AppProvider } from "../store";
import HeartRateImg from "./images/heartrate.png";
import RespiratoryRate from "./images/respiratoryrate.png";
import OxygenSaturation from "./images/oxygensaturation.png";
const MedicalRecordCard = ({ record }) => {
  const { currUserData, patientData, doctorData } = useContext(AppProvider);
  let patient, doctor;
  if (currUserData.role == "Doctor") {
    patient = patientData.find((pat) => pat.patientid == record.patientid);
  }
  if (currUserData.role == "Patient") {
    doctor = doctorData.find((doc) => doc.doctorid == record.doctorid);
  }
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="w-[80vw] lg:w-[60vw] border-2 border-gray-400 p-10 rounded-2xl text-center lg:text-left">
        <p className="mb-5">
          Record date: {new Date(record.recorddate).toLocaleDateString()}
        </p>
        {currUserData.role == "Patient" && (
          <h1>
            <span className="font-bold">Patient name: </span>
            {currUserData.firstname + " " + currUserData.lastname}
          </h1>
        )}
        {currUserData.role == "Doctor" && (
          <h1>
            <span className="font-bold">Doctor name: </span>
            {"Dr. " + currUserData.firstname + " " + currUserData.lastname}
          </h1>
        )}
        {currUserData.role == "Patient" && (
          <p>
            <span className="font-bold">Diagnosed by: </span>
            {"Dr. " + doctor.firstname + " " + doctor.lastname}
          </p>
        )}
        {currUserData.role == "Doctor" && (
          <p>
            <span className="font-bold">Diagnosed: </span>
            {patient.firstname + " " + patient.lastname}
          </p>
        )}
        <div className="lg:flex justify-between items-center">
          <div className="mt-10 lg:px-20 space-y-5" id="diagnosis">
            <div>
              <p className="lg:text-xl font-semibold">Diagnosis</p>
              <p>{record.diagnosis}</p>
            </div>
            <div>
              <p className="lg:text-xl font-semibold">Prescriptions</p>
              <p>{record.prescriptions}</p>
            </div>
            <div>
              <p className="lg:text-xl font-semibold">Test Results</p>
              <p>{record.testresults}</p>
            </div>
            <div>
              <p className="lg:text-xl font-semibold">Treatment</p>
              <p>{record.treatment}</p>
            </div>
          </div>
          <div className="hidden lg:block h-70 w-0.5 bg-gray-400 mt-15"></div>
          <div
            id="vitals"
            className="mt-10 lg:mt-5 lg:px-15 lg:mr-0 space-y-2 lg:space-y-8"
          >
            <p className="text-xl lg:text-2xl font-semibold">Vitals</p>
            <div>
              <p className="lg:w-50">
                {"Blood Pressure: " + record.bloodpressure + " ❤"}
              </p>
            </div>
            <div>
              <p className="lg:w-50">
                {"Blood Sugar: " + record.bloodsugar + " 🩸"}
              </p>
            </div>
            <div className="flex gap-x-2 items-center justify-center lg:justify-normal">
              <p>{" Heart Rate: " + record.heartrate}</p>
              <img className="h-8 w-10" src={HeartRateImg} alt="" />
            </div>
            <div>
              <p>{" Temperature: " + record.temperature + " 🌡"}</p>
            </div>
            <div className="flex gap-x-2 items-center justify-center lg:justify-normal">
              <p>{" Respiratory Rate: " + record.respiratoryrate}</p>
              <img className="h-5 w-7" src={RespiratoryRate} alt="" />
            </div>
            <div className="flex gap-x-2 items-center justify-center lg:justify-normal lg:w-55">
              <p>{" Oxygen Saturation: " + record.oxygensaturation + " "}</p>
              <img className="h-7 w-7" src={OxygenSaturation} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalRecordCard;
