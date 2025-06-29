import { useContext } from "react";
import { AppProvider } from "../store";
import coverpage from "./images/coverpage.png";
import neurologist from "./images/neurologist.png";
import gastroentologist from "./images/gastroentologist.png";
import orthopedic from "./images/orthopedic.png";
import dermatologist from "./images/dermatologist.png";
import pulmonologist from "./images/pulmonologist.png";
import eyespecialist from "./images/eyespecialist.png";
import entspecialist from "./images/entspecialist.png";
import psychiatrist from "./images/psychiatrist.png";
import Specialization from "./specialization.jsx";

const Appointments = () => {
  const { currPage, specializationPage, setSpecializationPage } =
    useContext(AppProvider);
  return (
    <>
      {currPage == "appointments" && specializationPage == "" && (
        <div>
          <img
            src={coverpage}
            alt="coverpage"
            className="w-[90vw] lg:w-[50vw] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-5xl h-auto object-center mx-auto rounded-2xl xl:h-80 md:h-64 my-10"
          />
          <hr className="h-[0.5vh] bg-gray-400 mx-10 lg:mx-40 my-20" />
          <div className="flex justify-around flex-wrap px-4">
            <div className="flex flex-col items-center w-1/4 max-w-xs p-1 ml-8 sm:ml-0 md:ml-0">
              <img
                src={neurologist}
                alt="neurologist"
                className="h-25 w-25 object-cover cursor-pointer"
                onClick={() => {
                  setSpecializationPage("neurologist");
                }}
              />
              <div className=" text-center">Neurologist</div>
            </div>
            <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/4 max-w-xs p-2 ml-6 sm:ml-0 md:ml-0">
              <img
                src={gastroentologist}
                alt="gastroentologist"
                className="h-23 w-23 object-cover cursor-pointer"
                onClick={() => {
                  setSpecializationPage("gastroentrologist");
                }}
              />
              <div className="mt-2 text-center">Gastroentrologist</div>
            </div>
            <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/4 max-w-xs p-2">
              <img
                src={orthopedic}
                alt="orthopedic"
                className="h-26 w-23 object-cover cursor-pointer"
                onClick={() => {
                  setSpecializationPage("orthopedic");
                }}
              />
              <div className=" text-center">Orthopedic</div>
            </div>
            <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/4 max-w-xs p-2">
              <img
                src={dermatologist}
                alt="dermatologist"
                className="h-26 w-23 object-cover cursor-pointer"
                onClick={() => {
                  setSpecializationPage("dermatologist");
                }}
              />
              <div className="text-center">Dermatologist</div>
            </div>
            <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/4 max-w-xs p-2">
              <img
                src={pulmonologist}
                alt="pulmonologist"
                className="h-24 w-22 object-cover cursor-pointer"
                onClick={() => {
                  setSpecializationPage("pulmonologist");
                }}
              />
              <div className="text-center">Pulmonologist</div>
            </div>
            <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/4 max-w-xs p-2">
              <img
                src={eyespecialist}
                alt="eyespecialist"
                className="h-24 w-22 object-cover cursor-pointer"
                onClick={() => {
                  setSpecializationPage("eyespecialist");
                }}
              />
              <div className="text-center">Eye Specialist</div>
            </div>
            <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/4 max-w-xs p-2">
              <img
                src={entspecialist}
                alt="entspecialist"
                className="h-26 w-23 object-cover cursor-pointer"
                onClick={() => {
                  setSpecializationPage("entspecialist");
                }}
              />
              <div className="text-center">ENT Specialist</div>
            </div>
            <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/4 max-w-xs p-2">
              <img
                src={psychiatrist}
                alt="psychiatrist"
                className="h-25 w-23 object-cover cursor-pointer"
                onClick={() => {
                  setSpecializationPage("psychiatrist");
                }}
              />
              <div className="text-center">Psychiatrist</div>
            </div>
          </div>
        </div>
      )}
      {/* specialization pages */}
      {currPage == "appointments" && specializationPage == "neurologist" && (
        <Specialization
          setSpecializationPage={setSpecializationPage}
          nameSpec="Neurologist"
        ></Specialization>
      )}
      {currPage == "appointments" &&
        specializationPage == "gastroentrologist" && (
          <Specialization
            setSpecializationPage={setSpecializationPage}
            nameSpec="Gastroentrologist"
          ></Specialization>
        )}
      {currPage == "appointments" && specializationPage == "orthopedic" && (
        <Specialization
          setSpecializationPage={setSpecializationPage}
          nameSpec="Orthopedic"
        ></Specialization>
      )}
      {currPage == "appointments" && specializationPage == "dermatologist" && (
        <Specialization
          setSpecializationPage={setSpecializationPage}
          nameSpec="Dermatologist"
        ></Specialization>
      )}
      {currPage == "appointments" && specializationPage == "pulmonologist" && (
        <Specialization
          setSpecializationPage={setSpecializationPage}
          nameSpec="Pulmonologist"
        ></Specialization>
      )}
      {currPage == "appointments" && specializationPage == "eyespecialist" && (
        <Specialization
          setSpecializationPage={setSpecializationPage}
          nameSpec="Eye Specialist"
        ></Specialization>
      )}
      {currPage == "appointments" && specializationPage == "entspecialist" && (
        <Specialization
          setSpecializationPage={setSpecializationPage}
          nameSpec="ENT Specialist"
        ></Specialization>
      )}
      {currPage == "appointments" && specializationPage == "psychiatrist" && (
        <Specialization
          setSpecializationPage={setSpecializationPage}
          nameSpec="Psychiatrist"
        ></Specialization>
      )}
    </>
  );
};
export default Appointments;
