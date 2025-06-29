import { useRef, useState } from "react";
import Input from "./ui_components/input.jsx";
import { supabase } from "../supabase-client";

const DoctorForm = () => {
  const [loading, setLoading] = useState(false);
  const userName = useRef();
  const password = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const contact = useRef();
  const gender = useRef();
  const dob = useRef();
  const age = useRef();
  const qualifications = useRef();
  const specialization = useRef();
  const previousExperience = useRef();
  const availability = useRef();
  const confirmPassword = useRef();

  async function Submit(event) {
    setLoading(true);
    event.preventDefault();
    const UserName = userName.current.value;
    const Password = password.current.value;
    const FirstName = firstName.current.value;
    const LastName = lastName.current.value;
    const Email = email.current.value;
    const Contact = contact.current.value;
    const Gender = gender.current.value;
    const DOB = dob.current.value;
    const Age = age.current.value;
    const Qualifications = qualifications.current.value;
    const Specialization = specialization.current.value;
    const PreviousExperience = previousExperience.current.value;
    const Availability = availability.current.value;
    const ConfirmPassword = confirmPassword.current.value;
    try {
      if (Password != ConfirmPassword) {
        alert("Please confirm your password!");
        setLoading(false);
        return;
      }
      //1. Register the user
      const { data: userData, error: userError } = await supabase
        .from("users")
        .insert({
          username: UserName,
          passwordhash: Password,
          role: "Doctor",
        })
        .select();
      if (userError) {
        alert("User name already exists", userError);
        setLoading(false);
        return;
      }

      //2. Register the Doctor details
      const { error: doctorError } = await supabase.from("doctors").insert({
        userid: userData[0].userid,
        firstname: FirstName,
        lastname: LastName,
        specialization: Specialization,
        contactnumber: Contact,
        email: Email,
        availability: Availability,
        age: parseInt(Age),
        qualifications: Qualifications,
        previousexperience: PreviousExperience,
        gender: Gender,
        dateofbirth: DOB,
      });
      if (doctorError) {
        console.log("doctor error: ", doctorError);
        const { error } = await supabase
          .from("users")
          .delete()
          .eq("userid", userData[0].userid);
        alert(
          "Some doctor details already exist in the database. Please use different ones"
        );
        if (error) {
          console.log("Could not delete user!");
        }
        setLoading(false);
        return;
      }

      //success case
      userName.current.value = "";
      password.current.value = "";
      firstName.current.value = "";
      lastName.current.value = "";
      email.current.value = "";
      contact.current.value = "";
      gender.current.value = "Male";
      dob.current.value = "";
      age.current.value = "";
      qualifications.current.value = "";
      specialization.current.value = "Neurologist";
      previousExperience.current.value = "";
      availability.current.value = "";
      confirmPassword.current.value = "";

      alert("Registration Successful!");
      setLoading(false);
    } catch (error) {
      console.log("Registration error:", error);
      alert("An error occurred during registration");
      setLoading(false);
    }
  }
  return (
    <div className="flex items-center justify-center">
      <form
        action=""
        className="w-80 lg:w-[50vw] rounded-2xl p-5 lg:p-8 lg:space-y-8 space-y-10 border-1 lg:border-2 border-slate-400 mt-10"
        onSubmit={Submit}
      >
        <h1 className="text-xl lg:text-2xl text-center font-bold text-[#2274A5]">
          Doctor Signup
        </h1>
        <div className="lg:flex flex-wrap justify-center items-center gap-x-30">
          <div className="space-y-5 mt-5">
            <div className="place-self-center">
              <Input name="Username" ref={userName} type="input"></Input>
            </div>
            <div className="place-self-center">
              <Input name="Password" ref={password} type="password"></Input>
            </div>
            <div className="place-self-center">
              <Input
                name="Confirm Password"
                ref={confirmPassword}
                type="password"
              ></Input>
            </div>
            <div className="place-self-center">
              <Input name="Email" ref={email} type="input"></Input>
            </div>
            <div className="place-self-center">
              <Input name="Age" ref={age} type="input"></Input>
            </div>
            <div className="place-self-center">
              <p className="text-gray-400">Gender</p>
              <select
                name="gender"
                className="text-gray-800 h-7 lg:h-10 w-46 lg:w-48 border-2 border-gray-400 rounded-xl lg:mt-2 cursor-pointer"
                id=""
                ref={gender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="place-self-center">
              <p className="text-gray-400">Date of Birth</p>
              <input
                type="date"
                className="text-gray-800 h-7 lg:h-10 px-2 border-2 rounded-2xl w-46 lg:w-48 mt-2 border-gray-400 cursor-pointer"
                ref={dob}
              />
            </div>
          </div>
          <div className="space-y-5">
            <div className="place-self-center">
              <Input name="First Name" ref={firstName} type="input"></Input>
            </div>
            <div className="place-self-center">
              <Input name="Last Name" ref={lastName} type="input"></Input>
            </div>
            <div className="place-self-center">
              <Input name="Contact" ref={contact} type="input"></Input>
            </div>
            <div className="place-self-center">
              <Input
                name="Qualifications"
                ref={qualifications}
                type="input"
              ></Input>
            </div>
            <div className="place-self-center">
              <p className="text-gray-400">Specialization</p>
              <select
                name="specialization"
                className="text-gray-800 h-7 lg:h-10 w-46 lg:w-48 border-2 border-gray-400 rounded-xl lg:mt-2 cursor-pointer"
                id=""
                ref={specialization}
              >
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroentrologist">Gastroentrologist</option>
                <option value="Orthopedic">Orthopedic</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pulmonologist">Pulmonologist</option>
                <option value="Eye Specialist">Eye Specialist</option>
                <option value="ENT Specialist">ENT Specialist</option>
                <option value="Psychiatrist">Psychiatrist</option>
              </select>
            </div>
            <div className="place-self-center">
              <Input
                name="Previous Experience"
                ref={previousExperience}
                type="input"
              ></Input>
            </div>
            <div className="place-self-center">
              <Input
                name="Availability"
                ref={availability}
                type="input"
              ></Input>
            </div>
          </div>
        </div>

        <div className="place-self-center">
          <button
            className={`h-10 w-60 lg:w-lg bg-[#2274A5] rounded-2xl text-white font-bold hover:bg-white hover:text-[#2274A5] hover:inset-ring-2 hover:inset-ring-[#2274A5] transition-all duration-150 ease-linear cursor-pointer ${
              loading ? "opacity-30" : "opacity-100"
            }`}
          >
            {!loading ? "Signup" : "Signing up..."}
          </button>
        </div>
      </form>
    </div>
  );
};
export default DoctorForm;
