import { useRef } from "react";

const SignupForm = ({ setsignup }) => {
  const signupstate = useRef();
  const Submit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="h-100 flex items-center justify-center lg:pt-20 relative">
      <form
        action=""
        className="h-80 w-70 lg:h-95 lg:w-90 rounded-2xl p-5 lg:p-8 lg:space-y-20 space-y-18 border-1 lg:border-2 border-slate-400 mt-15 lg:mt-0"
        onSubmit={Submit}
      >
        <h1 className="text-xl lg:text-2xl text-center">
          Signup for{" "}
          <span className="text-[#2274A5] font-bold">HealthSync</span>!
        </h1>
        <div className="place-self-center">
          <h1 className="text-center mb-2">Select your Role</h1>
          <select
            name="role"
            id=""
            className="h-10 w-40 lg:w-60 border-2 border-gray-400 rounded-xl cursor-pointer"
            ref={signupstate}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>

        <div className="place-self-center">
          <button
            className="h-10 w-40 lg:w-60 bg-[#2274A5] rounded-2xl text-white font-bold hover:bg-white hover:text-[#2274A5] hover:inset-ring-2 hover:inset-ring-[#2274A5] transition-all duration-150 ease-linear cursor-pointer"
            onClick={() => {
              setsignup(signupstate.current.value);
            }}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};
export default SignupForm;
