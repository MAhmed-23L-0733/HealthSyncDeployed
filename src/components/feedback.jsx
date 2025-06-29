import { useContext, useEffect, useRef, useState } from "react";
import { AppProvider } from "../store";
import FeedBackCard from "./feedbackcard";
import { VscFeedback } from "react-icons/vsc";
import FeedBackForm from "./feedbackform";
import { IoArrowBackCircle } from "react-icons/io5";
import { supabase } from "../supabase-client";
import Loader from "./ui_components/loader";
const Feedback = () => {
  const [loading, setLoading] = useState(false);
  const { currPage, feedBacks, setFeedBacks, currUserData } =
    useContext(AppProvider);
  const [order, setOrder] = useState("newest");
  async function GetFeedBacks() {
    let feedbackRes;
    if (order == "newest") {
      if (currUserData.role == "Patient") {
        feedbackRes = await supabase
          .from("feedback")
          .select("*")
          .order("feedbackpostdate", { ascending: false });
      }
      if (currUserData.role == "Doctor") {
        feedbackRes = await supabase
          .from("feedback")
          .select("*")
          .eq("doctorid", currUserData.doctorid)
          .order("feedbackpostdate", { ascending: false });
      }
    } else if (order == "oldest") {
      if (currUserData.role == "Patient") {
        feedbackRes = await supabase
          .from("feedback")
          .select("*")
          .order("feedbackpostdate", { ascending: true });
      }
      if (currUserData.role == "Doctor") {
        feedbackRes = await supabase
          .from("feedback")
          .select("*")
          .eq("doctorid", currUserData.doctorid)
          .order("feedbackpostdate", { ascending: true });
      }
    } else if (order == "rating desc") {
      if (currUserData.role == "Patient") {
        feedbackRes = await supabase
          .from("feedback")
          .select("*")
          .order("rating", { ascending: false });
      }
      if (currUserData.role == "Doctor") {
        feedbackRes = await supabase
          .from("feedback")
          .select("*")
          .eq("doctorid", currUserData.doctorid)
          .order("rating", { ascending: false });
      }
    } else if (order == "rating asec") {
      if (currUserData.role == "Patient") {
        feedbackRes = await supabase
          .from("feedback")
          .select("*")
          .order("rating", { ascending: true });
      }
      if (currUserData.role == "Doctor") {
        feedbackRes = await supabase
          .from("feedback")
          .select("*")
          .eq("doctorid", currUserData.doctorid)
          .order("rating", { ascending: true });
      }
    } else if (order == "byname") {
      if (currUserData.role == "Patient") {
        feedbackRes = await supabase
          .rpc("get_feedback_sorted_by_patient")
          .select("*");
      }
      if (currUserData.role == "Doctor") {
        feedbackRes = await supabase
          .rpc("get_feedback_sorted_by_doctor", {
            doctor_id: currUserData.doctorid,
          })
          .select("*");
      }
    }
    if (feedbackRes.error) {
      console.log(feedbackRes.error);
      alert("Feed backs are not available at the moment. Try again later.");
      return;
    }
    setFeedBacks(feedbackRes.data);
    setLoading(false);
  }
  useEffect(() => {
    setLoading(true);
    GetFeedBacks();
  }, [currPage, order]);
  const [feedBackBtn, setFeedBackBtn] = useState(false);
  return (
    <>
      {loading && <Loader></Loader>}
      {currPage == "feedback" && !loading && feedBackBtn == false && (
        <div className="p-5 lg:p-10 mt-5 lg:mt-10">
          <div className="flex justify-between items-center">
            <h1 className="text-left text-xl lg:text-3xl font-semibold">
              Feedbacks
            </h1>
            {currUserData.role == "Patient" && (
              <button
                className="lg:mr-10 text-2xl bg-[#2274A5] py-2 px-5 lg:px-8 rounded-xl text-white hover:inset-ring-2 hover:inset-ring-[#2274A5] hover:bg-white hover:text-[#2274A5] cursor-pointer transition-all duration-150 ease-linear"
                onClick={() => {
                  setFeedBackBtn(true);
                }}
              >
                <VscFeedback />
              </button>
            )}
          </div>
          <div className="flex items-center justify-center mt-5">
            <h1 className="font-semibold">Sort by: </h1>
            <select
              name=""
              id=""
              value={order}
              onChange={(e) => {
                setOrder(e.target.value);
              }}
              className="border-1 border-gray-400 rounded-xl ml-2 w-30 cursor-pointer"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="byname">By Name</option>
              <option value="rating desc">Rating Desc</option>
              <option value="rating asec">Rating Asec</option>
            </select>
          </div>
          <div className="mt-5 lg:mt-10 flex flex-wrap justify-center items-center gap-y-5 lg:gap-y-10">
            {feedBacks.length > 0 ? (
              feedBacks.map((feedback) => (
                <FeedBackCard
                  feedback={feedback}
                  key={feedback.feedbackid}
                ></FeedBackCard>
              ))
            ) : (
              <div className="text-sm font-semibold lg:text-xl text-center mt-10">
                No feedbacks
              </div>
            )}
          </div>
        </div>
      )}
      {currPage == "feedback" && feedBackBtn == true && (
        <div className="mt-5 p-5 lg:p-10">
          <div className="flex justify-between">
            <h1 className="text-xl lg:text-3xl font-semibold">Add Feedback</h1>
            <div className="text-center mr-5 lg:mr-10">
              <button
                className="text-4xl lg:text-5xl cursor-pointer"
                onClick={() => {
                  setFeedBackBtn(false);
                }}
              >
                <IoArrowBackCircle className="text-red-600"></IoArrowBackCircle>
              </button>
              <p className="font-semibold text-sm lg:text-md">Back</p>
            </div>
          </div>
          <FeedBackForm></FeedBackForm>
        </div>
      )}
    </>
  );
};

export default Feedback;
