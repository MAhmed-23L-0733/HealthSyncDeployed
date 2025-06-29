import { useContext, useRef, useState } from "react";
import { AppProvider } from "../store";
import { supabase } from "../supabase-client";
const MyAppointmentCard = ({ appointment }) => {
  const [loading, setLoading] = useState(false);
  const { currUserData, doctorData, patientData, setAppointmentData } =
    useContext(AppProvider);
  const status = useRef();
  const setDate = useRef(new Date());
  const notes = useRef();
  let doctor, patient;
  if (currUserData.role == "Patient") {
    doctor = doctorData.filter((doc) => doc.doctorid == appointment.doctorid);
  } else if (currUserData.role == "Doctor") {
    patient = patientData.filter(
      (pat) => pat.patientid == appointment.patientid
    );
  }
  async function updateAppointment() {
    setLoading(true);
    const res = await supabase
      .from("appointments")
      .update({
        patientid: appointment.patientid,
        doctorid: currUserData.doctorid,
        appointmentdate: setDate.current.value,
        appointmentstatus: status.current.value,
        notes:
          notes.current.value == "" ? appointment.notes : notes.current.value,
      })
      .eq("appointmentid", appointment.appointmentid);

    if (res.error) {
      console.log("The appointment was not updated: ", res.error);
      setLoading(false);
    } else {
      status.current.value = "Completed";
      setDate.current.value = "";
      notes.current.value = "";
      let appointmentRes;
      if (currUserData.role == "Patient") {
        appointmentRes = await supabase
          .from("appointments")
          .select("*")
          .eq("patientid", currUserData.patientid);
        setLoading(false);
      }
      if (currUserData.role == "Doctor") {
        appointmentRes = await supabase
          .from("appointments")
          .select("*")
          .eq("doctorid", currUserData.doctorid);
        setLoading(false);
      }
      if (appointmentRes.error) {
        setAppointmentData([]);
        setLoading(false);
      } else {
        setAppointmentData(appointmentRes.data);
        setLoading(false);
      }
      alert("The appointment was successfully updated!");
      setLoading(false);
    }
  }
  return (
    <>
      <div className="w-75 lg:w-170 rounded-2xl border-gray-400 border-2 p-2 lg:p-5 space-y-5 lg:space-y-0 text-left hover:shadow-gray-600 hover:shadow-md hover:border-0 transition-all duration-100 ease-linear">
        <div className="flex justify-between text-sm lg:text-lg">
          <p>
            <span className="font-semibold">Appointment Date:</span>{" "}
            {new Date(appointment.appointmentdate).toLocaleDateString()}
          </p>
          <p>
            <span className="font-semibold">Status: </span>
            <span
              className={`text-white text-sm lg:text-md px-1 rounded-2xl ${
                appointment.appointmentstatus == "Completed" && "bg-green-700"
              } ${
                appointment.appointmentstatus == "Scheduled" && "bg-yellow-600"
              } ${
                appointment.appointmentstatus == "Cancelled" && "bg-red-600"
              } ${
                appointment.appointmentstatus == "Rescheduled" && "bg-blue-600"
              }`}
            >
              {appointment.appointmentstatus}
            </span>
          </p>
        </div>
        <div className="lg:flex justify-between items-center lg:mt-5 space-y-5 lg:space-y-0 text-sm lg:text-lg">
          <div>
            {currUserData.role == "Patient" && (
              <p>
                <span className="font-semibold">Patient Name:</span>{" "}
                {currUserData.firstname + " " + currUserData.lastname}
              </p>
            )}
            {currUserData.role == "Doctor" && (
              <p>
                <span className="font-semibold">Patient Name:</span>{" "}
                {patient[0].firstname + " " + patient[0].lastname}
              </p>
            )}
            {currUserData.role == "Patient" && (
              <p>
                <span className="font-semibold">Doctor Name:</span>{" "}
                {doctor[0].firstname + " " + doctor[0].lastname}
              </p>
            )}
            {currUserData.role == "Doctor" && (
              <p>
                <span className="font-semibold">Doctor Name:</span>{" "}
                {currUserData.firstname + " " + currUserData.lastname}
              </p>
            )}
          </div>
          <div className="lg:w-70">
            <p>
              <span className="font-semibold">Notes:</span>
            </p>
            <p className="text-justify">{appointment.notes}</p>
          </div>
        </div>
        {currUserData.role == "Doctor" && (
          <div className="text-sm space-y-5 mt-10 lg:flex items-center justify-between">
            <div className="space-y-5">
              <div className="flex items-center gap-x-2">
                <p>Set Status: </p>
                <select
                  ref={status}
                  className="border-2 border-gray-400 rounded-2xl w-31 cursor-pointer"
                >
                  <option value="Completed">Completed</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="Rescheduled">Rescheduled</option>
                </select>
              </div>
              <div className="flex items-center gap-x-2">
                <p>Set Date: </p>
                <input
                  type="date"
                  ref={setDate}
                  className="border-2 border-gray-400 rounded-2xl px-1 cursor-pointer"
                />
              </div>
            </div>
            <div>
              <p>Add Notes:</p>
              <textarea
                type="text"
                className="h-35 w-85 lg:w-90 rounded-xl lg:rounded-2xl border-2 border-gray-400 mt-2 p-2 resize-none text-sm lg:text-lg"
                ref={notes}
              />
            </div>
          </div>
        )}
        {currUserData.role == "Doctor" && (
          <div className="flex items-center justify-center mt-10">
            <button
              className={`h-10 w-100 lg:w-150 bg-[#2274A5] text-white hover:inset-ring-2 hover:inset-ring-[#2274A5] hover:text-[#2274A5] hover:bg-white rounded-2xl transition-all duration-150 ease-linear cursor-pointer ${
                loading ? "opacity-30" : "opacity-100"
              }`}
              onClick={updateAppointment}
            >
              {!loading ? "Update" : "Updating..."}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default MyAppointmentCard;
