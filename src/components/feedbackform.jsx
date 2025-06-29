import { useContext, useRef, useState } from "react";
import { AppProvider } from "../store";
import Rating from "./ui_components/rating";
import { supabase } from "../supabase-client";

const FeedBackForm = () => {
  const [loading, setLoading] = useState(false);
  const { doctorData, currUserData } = useContext(AppProvider);
  const [rating, setRating] = useState(1);
  const selectDoc = useRef();
  const comments = useRef();
  const handleChildData = (rating) => {
    setRating(rating);
  };
  async function submit(event) {
    setLoading(true);
    event.preventDefault();
    const addFeedback = await supabase.from("feedback").insert({
      patientid: currUserData.patientid,
      doctorid: selectDoc.current.value,
      rating: parseInt(rating),
      comments: comments.current.value,
    });
    if (addFeedback.error) {
      alert("Feedback could not be added!");
      setLoading(false);
      return;
    } else {
      comments.current.value = "";
      alert("Feedback added successfully!");
      setLoading(false);
    }
  }
  return (
    <>
      <div className="p-5 lg:p-10">
        <div className="flex items-center justify-center">
          <form
            action=""
            onSubmit={(event) => {
              submit(event);
            }}
            className="w-80 lg:w-[50vw] rounded-2xl p-5 lg:p-8 lg:px-20 lg:space-y-8 space-y-10 border-1 lg:border-2 border-slate-400 mt-10"
          >
            <h1 className="text-xl lg:text-2xl text-center font-bold text-[#2274A5]">
              Feedback
            </h1>
            <div className="lg:flex items-center gap-x-2 text-center lg:text-left space-y-2 lg:space-y-0 justify-center">
              <p>Select Doctor: </p>
              <select
                name="select doctor"
                id=""
                ref={selectDoc}
                className="py-1 px-2 rounded-2xl border-1 lg:border-2 border-gray-400 cursor-pointer"
              >
                {doctorData.map((doc) => (
                  <option
                    key={doc.doctorid}
                    id={doc.doctorid}
                    value={doc.doctorid}
                  >
                    {doc.firstname + " " + doc.lastname}
                  </option>
                ))}
              </select>
            </div>
            <div className="place-self-center">
              <textarea
                name="comments"
                id=""
                ref={comments}
                placeholder="Comment"
                className="p-2 rounded-xl border-1 lg:border-2 border-gray-400 w-60 resize-none h-50 lg:w-125"
              ></textarea>
            </div>
            <div className="grid lg:place-content-start place-content-center space-y-5">
              <p className="lg:text-xl text-center lg:text-left">Rating</p>
              <Rating onSendData={handleChildData}></Rating>
            </div>
            <div className="place-self-center">
              <button
                className={`h-10 w-60 lg:w-lg bg-[#2274A5] rounded-2xl text-white font-bold hover:bg-white hover:text-[#2274A5] hover:inset-ring-2 hover:inset-ring-[#2274A5] transition-all duration-150 ease-linear cursor-pointer ${
                  loading ? "opacity-30" : "opacity-100"
                }`}
              >
                {!loading ? "Post" : "Posting"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FeedBackForm;
