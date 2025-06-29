import { useContext, useRef, useState } from "react";
import DoctorPfp from "./images/doctorpfp.png";
import DoctorPfpFemale from "./images/doctorpfpfemale.png";
import { AppProvider } from "../store";
import { supabase } from "../supabase-client";
const DoctorCard = ({ doc }) => {
  const [loading, setLoading] = useState(false);
  const { currUserData } = useContext(AppProvider);
  const setDate = useRef(new Date());
  async function bookAppointment() {
    setLoading(true);
    const res = await supabase
      .from("appointments")
      .insert({
        patientid: currUserData.patientid,
        doctorid: doc.doctorid,
        appointmentdate: setDate.current.value,
        appointmentstatus: "Scheduled",
        notes: "To be set by the doctor.",
      })
      .select();
    if (res.error) {
      alert("The appointment was not successful. Please try again!");
      setLoading(false);
    } else {
      alert(
        "The appointment was successfully made. Please wait for the doctor to respond!"
      );
      setLoading(false);
    }
  }
  return (
    <div className="grid place-content-center">
      <div className="w-[93vw] lg:w-[45vw] bg-amber-100 rounded-2xl p-2  lg:p-5 flex flex-wrap justify-center border-1 lg:border-2 border-gray-400 hover:shadow-lg transition-all duration-150 ease-linear">
        <div className="flex items-center justify-center space-x-5">
          <div className="space-y-5">
            <img
              src={`${doc.gender == "Male" ? DoctorPfp : DoctorPfpFemale}`}
              alt=""
              className="rounded-full lg:h-35 lg:w-35 h-20 w-20"
            />
            <div>
              <p className="text-sm">
                <span className="font-semibold">Name: </span>
                {doc.firstname + " " + doc.lastname}
              </p>
              <p className="text-sm lg:w-45">
                <span className="font-semibold">Age: </span>
                {doc.age}
              </p>
            </div>
          </div>
          <div className="mt-5 lg:mt-0 lg:space-y-2 ml-2">
            <p className="text-sm lg:text-md">
              <span className="font-semibold">Email: </span>
              {doc.email}
            </p>
            <p className="text-sm lg:text-md">
              <span className="font-semibold">Contact: </span>
              {doc.contactnumber}
            </p>
            <p className="text-sm lg:text-md">
              <span className="font-semibold">Qualifications: </span>
              {doc.qualifications}
            </p>
            <p className="text-sm lg:text-md">
              <span className="font-semibold">Previous experience: </span>
              {doc.previousexperience}
            </p>
            <p className="text-sm lg:text-md">
              <span className="font-semibold">Specialization: </span>
              {doc.specialization}
            </p>
            <p className="text-sm lg:text-md">
              <span className="font-semibold">Availability: </span>
              {doc.availability}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-evenly w-100 mt-10 mb-3">
          <input
            type="date"
            className="bg-white p-2 rounded-2xl border-gray-400 border-2 lg:mr-5 w-30
            lg:w-40 cursor-pointer"
            ref={setDate}
          />
          <button
            className={`w-35 lg:w-45 h-10 rounded-2xl bg-[#2274A5] text-white hover:text-[#2274A5] hover:inset-ring-2 hover:inset-ring-[#2274A5] hover:bg-white transition-all duration-150 ease-linear cursor-pointer ${
              loading ? "opacity-30" : "opacity-100"
            }`}
            onClick={() => {
              bookAppointment();
            }}
          >
            {!loading ? "Book Appointment" : "Booking..."}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
