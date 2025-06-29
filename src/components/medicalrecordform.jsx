import { AppProvider } from "../store";
import { useContext, useRef, useState } from "react";
import Input from "./ui_components/input";
import { supabase } from "../supabase-client";
const MedicalRecordForm = ({ setAddBtn }) => {
  const [loading, setLoading] = useState(false);
  const { patientData, currUserData, setMedicalHistory, setCurrPage } =
    useContext(AppProvider);
  const patientFName = useRef();
  const patientLName = useRef();
  const diagnosis = useRef();
  const prescriptions = useRef();
  const testResults = useRef();
  const treatment = useRef();
  const bloodPressure = useRef();
  const bloodSugar = useRef();
  const heartRate = useRef();
  const temperature = useRef();
  const respiratoryRate = useRef();
  const oxygenSaturation = useRef();

  async function addMedicalRecord() {
    setLoading(true);
    const patient = patientData.find(
      (pat) =>
        pat.firstname == patientFName.current.value &&
        pat.lastname == patientLName.current.value
    );
    if (patient == undefined) {
      alert("Patient does not exist!");
      setLoading(false);
      return;
    }
    const res = await supabase.from("medicalrecords").insert({
      patientid: patient.patientid,
      doctorid: currUserData.doctorid,
      diagnosis: diagnosis.current.value,
      prescriptions: prescriptions.current.value,
      testresults: testResults.current.value,
      treatment: treatment.current.value,
      bloodpressure: bloodPressure.current.value,
      bloodsugar: bloodSugar.current.value,
      heartrate: parseInt(heartRate.current.value),
      temperature: parseFloat(temperature.current.value),
      respiratoryrate: parseInt(respiratoryRate.current.value),
      oxygensaturation: parseFloat(oxygenSaturation.current.value),
    });
    if (res.error) {
      alert(
        "Medical record could not be added. Please recheck the credentials."
      );
      setLoading(false);
    } else {
      setAddBtn(false);
      if (currUserData.role == "Patient") {
        const medicalHistoryRes = await supabase
          .from("medicalrecords")
          .select("*")
          .eq("patientid", currUserData.patientid);
        if (medicalHistoryRes.error) {
          setMedicalHistory([]);
        } else {
          setMedicalHistory(medicalHistoryRes.data);
        }
      } else if (currUserData.role == "Doctor") {
        const medicalHistoryRes = await supabase
          .from("medicalrecords")
          .select("*")
          .eq("doctorid", currUserData.doctorid);
        if (medicalHistoryRes.error) {
          setMedicalHistory([]);
        } else {
          setMedicalHistory(medicalHistoryRes.data);
        }
      }
    }
    alert("The medical record was successfully added!");
    setLoading(false);
  }

  return (
    <div className="flex items-center justify-center">
      <form
        action=""
        className="w-80 lg:w-[50vw] rounded-2xl p-5 lg:p-8 lg:space-y-8 space-y-13 
        border-1 lg:border-2 border-slate-400 overflow-auto mt-10 overflow-x-hidden"
        onSubmit={(event) => {
          event.preventDefault();
          addMedicalRecord();
        }}
      >
        <h1 className="text-xl lg:text-2xl text-center font-bold text-[#2274A5]">
          Medical Record
        </h1>
        <div className="lg:flex flex-wrap justify-center items-center gap-x-30">
          <div className="space-y-4 mt-5">
            <div className="place-self-center">
              <Input
                name="Patient First Name"
                ref={patientFName}
                type="input"
              ></Input>
            </div>
            <div className="place-self-center">
              <Input
                name="Patient Last Name"
                ref={patientLName}
                type="input"
              ></Input>
            </div>
            <div className="place-self-center mt-5 lg:mt-10">
              <h1 className="text-[#2274A5] font-semibold">Diagnosis</h1>
              <textarea
                className="h-30 w-55 resize-none border-2 border-gray-400 rounded-xl mt-2 p-2"
                ref={diagnosis}
                type="text"
              ></textarea>
            </div>
            <div className="place-self-center mt-5">
              <h1 className="text-[#2274A5] font-semibold">Prescriptions</h1>
              <textarea
                className="h-30 w-55 resize-none border-2 border-gray-400 rounded-xl mt-2 p-2"
                ref={prescriptions}
                type="text"
              ></textarea>
            </div>
            <div className="place-self-center mt-5 lg:mt-10">
              <h1 className="text-[#2274A5] font-semibold">Test Results</h1>
              <textarea
                className="h-30 w-55 resize-none border-2 border-gray-400 rounded-xl mt-2 p-2"
                ref={testResults}
                type="text"
              ></textarea>
            </div>
          </div>
          <div className="space-y-4">
            <div className="place-self-center mt-5 lg:mt-0">
              <h1 className="text-[#2274A5] font-semibold">Treatment</h1>
              <textarea
                className="h-30 w-55 resize-none border-2 border-gray-400 rounded-xl mt-2 p-2"
                ref={treatment}
                type="text"
              ></textarea>
            </div>
            <div className="place-self-center">
              <Input
                name="Blood Pressure"
                ref={bloodPressure}
                type="input"
              ></Input>
            </div>
            <div className="place-self-center">
              <Input name="Blood Sugar" ref={bloodSugar} type="input"></Input>
            </div>
            <div className="place-self-center">
              <Input name="Heart Rate" ref={heartRate} type="input"></Input>
            </div>
            <div className="place-self-center">
              <Input name="Temperature" ref={temperature} type="input"></Input>
            </div>
            <div className="place-self-center">
              <Input
                name="Respiratory Rate"
                ref={respiratoryRate}
                type="input"
              ></Input>
            </div>
            <div className="place-self-center">
              <Input
                name="Oxygen Saturation"
                ref={oxygenSaturation}
                type="input"
              ></Input>
            </div>
          </div>
        </div>

        <div className="place-self-center">
          <button
            className={`h-10 w-60 lg:w-lg bg-[#2274A5] rounded-2xl text-white font-bold hover:bg-white hover:text-[#2274A5] hover:inset-ring-2 hover:inset-ring-[#2274A5] transition-all duration-150 ease-linear cursor-pointer  ${
              loading ? "opacity-30" : "opacity-100"
            }`}
          >
            {!loading ? "Add" : "Adding..."}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MedicalRecordForm;
