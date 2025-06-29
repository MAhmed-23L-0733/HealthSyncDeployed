import { useContext } from "react";
import { AppProvider } from "../store";
import HeroImage from "./images/HeroSectionImage.png";
import AboutCard from "./ui_components/aboutcard.jsx";
import AhmedPfp from "./images/ahmedpfp.png";
import HaiderPfp from "./images/haiderpfp.png";
import HamzaPfp from "./images/hamzapfp.png";
import AboutUsPic from "./images/aboutuspicture.jpg";
const Home = () => {
  const {
    currPage,
    setSwitchBtn,
    setSpecializationPage,
    setCurrPage,
    currUserData,
  } = useContext(AppProvider);
  return (
    <>
      {currPage == "home" && (
        <div>
          <div className="mt-10 lg:mt-0 lg:flex justify-between items-center pl-10">
            <div className="lg:ml-40 space-y-3">
              {currUserData.role == "Patient" && (
                <p className="lg:text-2xl text-xl w-[90vw] lg:w-[40vw] font-bold">
                  Find the best doctors only on HealthSync.
                </p>
              )}
              {currUserData.role == "Doctor" && (
                <p className="lg:text-2xl text-xl w-[90vw] lg:w-[40vw] font-bold">
                  Connect with patients easily on HealthSync.
                </p>
              )}
              {currUserData.role == "Patient" && (
                <p>Book an appointment now!</p>
              )}
              <button
                className={`h-7 ${
                  currUserData.role == "Patient" ? "w-35" : "w-42"
                } rounded-lg text-white bg-blue-800 text-sm hover:text-blue-800 hover:inset-ring-2 hover:inset-ring-blue-800 hover:bg-white transition-all duration-150 ease-linear cursor-pointer`}
                onClick={() => {
                  currUserData.role == "Patient"
                    ? setCurrPage("appointments")
                    : setCurrPage("myappointments");
                  setSwitchBtn(false);
                  setSpecializationPage("");
                }}
              >
                {currUserData.role == "Patient" && <p>Book Appointment</p>}
                {currUserData.role == "Doctor" && <p>View your appointments</p>}
              </button>
            </div>
            <div>
              <img
                src={HeroImage}
                alt=""
                className="h-80 w-100 lg:h-[90vh] lg:w-[43vw]"
              />
            </div>
          </div>
          <div className="mt-30 p-10 lg:flex justify-between items-center">
            <div>
              <h1 className="lg:text-4xl text-xl font-semibold">
                About HealthSync
              </h1>
              <p className="mt-5 w-[70vw] lg:w-[50vw] text-justify text-lg">
                At HealthSync, we believe healthcare should be seamless,
                accessible, and personalized. Our platform bridges the gap
                between patients and healthcare providers, offering online
                doctor appointments, medical checkups, digital health records,
                and more all in one place. Whether you need a quick virtual
                consultation, routine lab tests, or secure access to your
                medical history, HealthSync ensures you receive timely,
                high-quality care from the comfort of your home.
                <br />
                <br />
                With a network of trusted doctors, specialists, and diagnostic
                centers, we prioritize convenience without compromising on
                quality. Our mission is to simplify healthcare through
                technology, making it easier for you to book appointments, track
                prescriptions, and manage wellness anytime, anywhere. Your
                health is in sync with Health Sync. 💙
              </p>
            </div>
            <div className="place-self-center">
              <img
                src={AboutUsPic}
                alt=""
                className="h-80 w-80 lg:h-100 lg:w-100 lg:mt-10 lg:mr-20"
              />
            </div>
          </div>
          <div className="bg-[#F8E9E9] mt-30 p-20">
            <h1 className="text-gray-600">Our Mission</h1>
            <p className="text-3xl font-semibold">
              Our mission is to make healthcare
              <span className="text-blue-950"> Accessible</span>,
              <span className="text-blue-950"> Affordable</span> and
              <span className="text-blue-950"> Easier</span> for the people of
              Pakistan.
            </p>
          </div>
          <div className="mt-20 lg:mt-30">
            <h1 className="text-center font-semibold text text-xl lg:text-4xl">
              Founders
            </h1>
            <div className="p-10 flex flex-wrap justify-center gap-x-10 mt-10 space-y-10 lg:mt-15">
              <AboutCard
                pfp={AhmedPfp}
                name="M Ahmed"
                post="Founder"
                about="Full stack developer with good grip in react, tailwind, node.js,express.js and sql. Currently pursuing Bachelors in Computer Science from FAST-NUCES Lahore."
              ></AboutCard>
              <AboutCard
                pfp={HaiderPfp}
                name="Haider Raza"
                post="Co-founder"
                about="Problem Solver with vast coding knowledge and debugging expertise. Currently pursuing Bachelors in Computer Science from FAST-NUCES Lahore."
              ></AboutCard>
              <AboutCard
                pfp={HamzaPfp}
                name="Hamza Nazakat"
                post="Co-founder"
                about="Versatile Backend Developer. Currently pursuing Bachelors in Computer Science from FAST-NUCES Lahore."
              ></AboutCard>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Home;
