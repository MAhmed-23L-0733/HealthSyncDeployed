import { useContext } from "react";
import { AppProvider } from "../store";
import DoctorCard from "./doctorCard";
import { IoArrowBackCircle } from "react-icons/io5";

const Specialization = ({ nameSpec, setSpecializationPage }) => {
  const { doctorData } = useContext(AppProvider);
  const specDoctors = doctorData.filter(
    (doc) => doc.specialization == nameSpec
  );
  return (
    <div className="p-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">{nameSpec + "s"}</h1>
        <div className="text-center lg:mr-10 mr-5 mt-5 lg:mt-0">
          <button
            className="text-4xl lg:text-5xl text-red-600 cursor-pointer"
            onClick={() => setSpecializationPage("")}
          >
            <IoArrowBackCircle></IoArrowBackCircle>
          </button>
          <p className="font-semibold text-sm lg:text-md">Back</p>
        </div>
      </div>
      <div className="lg:flex flex-wrap mt-10 justify-center items-center gap-5 space-y-5 lg:space-y-0">
        {specDoctors.length == 0 && (
          <div>We do not have any doctor available at this moment.</div>
        )}
        {specDoctors.map((doc) => (
          <DoctorCard key={doc.doctorid} doc={doc}></DoctorCard>
        ))}
      </div>
    </div>
  );
};

export default Specialization;
