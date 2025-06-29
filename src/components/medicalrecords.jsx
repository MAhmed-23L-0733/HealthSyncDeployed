import { AppProvider } from "../store.jsx";
import { useContext, useState, useEffect } from "react";
import { IoAddCircle } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
import MedicalRecordForm from "./medicalrecordform.jsx";
import MedicalRecordCard from "./medicalrecordcard.jsx";
import { supabase } from "../supabase-client";
import Loader from "./ui_components/loader.jsx";
const MedicalRecords = () => {
  const [addBtn, setAddBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const { currPage, medicalHistory, currUserData, setMedicalHistory } =
    useContext(AppProvider);
  async function GetMedicalHistory() {
    let medicalHistoryRes;
    if (currUserData.role == "Patient") {
      medicalHistoryRes = await supabase
        .from("medicalrecords")
        .select("*")
        .eq("patientid", currUserData.patientid);
      if (medicalHistoryRes.error) {
        setMedicalHistory([]);
      } else {
        setMedicalHistory(medicalHistoryRes.data);
      }
    } else if (currUserData.role == "Doctor") {
      medicalHistoryRes = await supabase
        .from("medicalrecords")
        .select("*")
        .eq("doctorid", currUserData.doctorid);
      if (medicalHistoryRes.error) {
        setMedicalHistory([]);
        console.log(medicalHistoryRes.error);
      } else {
        setMedicalHistory(medicalHistoryRes.data);
      }
    }
    setLoading(false);
  }
  useEffect(() => {
    setLoading(true);
    GetMedicalHistory();
  }, [currPage]);
  return (
    <>
      {loading && <Loader />}
      {currPage == "medical history" && !loading && addBtn == false && (
        <div className="mt-5 lg:mt-10 p-5 lg:p-10">
          <div className="flex justify-center lg:justify-between items-center">
            <h1 className="font-semibold text-xl lg:text-3xl">
              Medical Records
            </h1>
            {currUserData.role == "Doctor" && (
              <div className="text-center lg:mr-10 ml-20 lg:ml-0">
                <button
                  className="text-4xl lg:text-5xl cursor-pointer "
                  onClick={() => {
                    setAddBtn(!addBtn);
                  }}
                >
                  <IoAddCircle className="text-[#2274A5]"></IoAddCircle>
                </button>
                <p className="font-semibold text-sm lg:text-md">Add record</p>
              </div>
            )}
          </div>
          <div className="mt-10 space-y-10">
            {medicalHistory.map((record) => (
              <MedicalRecordCard
                key={record.recordid}
                record={record}
              ></MedicalRecordCard>
            ))}
          </div>
          {medicalHistory.length == 0 && (
            <p className="text-center">No medical history was found!</p>
          )}
        </div>
      )}
      {currPage == "medical history" && addBtn == true && (
        <div className="mt-5 p-5 lg:mt-10 lg:p-10">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-xl lg:text-3xl">
              Add Medical Record
            </h1>
            <div className="text-center mr-5 lg:mr-10">
              <button
                className="text-4xl lg:text-5xl cursor-pointer"
                onClick={() => {
                  setAddBtn(!addBtn);
                }}
              >
                <IoArrowBackCircle className="text-red-600"></IoArrowBackCircle>
              </button>
              <p className="font-semibold text-sm lg:text-md">Back</p>
            </div>
          </div>
          <MedicalRecordForm setAddBtn={setAddBtn}></MedicalRecordForm>
        </div>
      )}
    </>
  );
};

export default MedicalRecords;
