import { useContext, useEffect, useState } from "react";
import { AppProvider } from "../store";
import MyAppointmentCard from "./myappointmentcard";
import { supabase } from "../supabase-client";
import Loader from "./ui_components/loader";
const MyAppointments = () => {
  const { currPage, appointmentData, currUserData, setAppointmentData } =
    useContext(AppProvider);
  const [loading, setLoading] = useState(false);
  async function GetAppointments() {
    let appointmentRes;
    if (currUserData.role == "Patient") {
      appointmentRes = await supabase
        .from("appointments")
        .select("*")
        .eq("patientid", currUserData.patientid);
    }
    if (currUserData.role == "Doctor") {
      appointmentRes = await supabase
        .from("appointments")
        .select("*")
        .eq("doctorid", currUserData.doctorid);
    }
    if (appointmentRes.error) {
      setAppointmentData([]);
    } else {
      setAppointmentData(appointmentRes.data);
    }
    setLoading(false);
  }
  useEffect(() => {
    setLoading(true);
    GetAppointments();
  }, [currPage]);
  return (
    <>
      {loading && <Loader />}
      {currPage == "myappointments" &&
        !loading &&
        appointmentData.length > 0 && (
          <div className="p-10 lg:mt-10 text-center lg:text-left">
            <h1 className="text-xl lg:text-3xl font-semibold">
              Your Appointments
            </h1>
            <div className="grid place-content-center mt-10 lg:mt-20 space-y-10">
              {appointmentData.map((appointment) => (
                <MyAppointmentCard
                  key={appointment.appointmentid}
                  appointment={appointment}
                ></MyAppointmentCard>
              ))}
            </div>
          </div>
        )}
      {currPage == "myappointments" && appointmentData.length == 0 && (
        <div className="min-h-[40vh]">
          <h1 className="mt-30 text-center text-2xl font-semibold">
            You have no appointments.
          </h1>
        </div>
      )}
    </>
  );
};

export default MyAppointments;
