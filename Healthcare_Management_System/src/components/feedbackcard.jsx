import { useContext } from "react";
import { AppProvider } from "../store";
import { FaStar } from "react-icons/fa6";
const FeedBackCard = ({ feedback }) => {
  const { patientData, doctorData, currUserData } = useContext(AppProvider);
  const patient = patientData.find(
    (pat) => pat.patientid == feedback.patientid
  );
  let doctor;
  if (currUserData.role == "Patient") {
    doctor = doctorData.find((doc) => doc.doctorid == feedback.doctorid);
  }
  return (
    <>
      <div className="p-5 w-90 lg:w-[60vw] rounded-2xl border-2 border-gray-400">
        <div className="flex justify-between items-center text-sm">
          <h1 className="text-sm w-35 lg:w-60">
            <span className="font-semibold">Posted by: </span>
            {patient.firstname + " " + patient.lastname}
          </h1>
          <p>
            <span className="font-semibold">Posted on: </span>
            {new Date(feedback.feedbackpostdate).toLocaleDateString()}
          </p>
        </div>

        {currUserData.role == "Patient" && (
          <h1 className="text-sm">
            <span className="font-semibold">To: </span>
            {"Dr. " + doctor.firstname + " " + doctor.lastname}
          </h1>
        )}
        {currUserData.role == "Doctor" && (
          <h1 className="text-sm">
            <span className="font-semibold">To: </span>
            {"Dr. " + currUserData.firstname + " " + currUserData.lastname}
          </h1>
        )}
        <div className="mt-5 p-2 border-1 border-gray-400 rounded-xl">
          <h1 className="text-justify">{feedback.comments}</h1>
        </div>
        <div className="mt-5 p-2 flex gap-x-2 text-yellow-400 justify-end">
          {Array.from({ length: feedback.rating }, (_, index) => (
            <FaStar key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeedBackCard;
