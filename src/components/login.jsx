import employee from "./../assets/employee.svg";
import { FaUserAlt, FaLock } from "react-icons/fa";
const Login = () => {
  return (
    <div className="flex justify-center h-screen lg:h-auto">
      <div className="flex w-5/ justify-center lg:my-10 lg:bg-slate-100">
        <div className="flex flex-col items-center mt-10 lg:mt-0 lg:bg-orange-100 w-1/2">
          <h1
            className="text-5xl text-orange-400 lg:mt-10"
            style={{ fontFamily: "irish grover" }}
          >
            Login
          </h1>
          <div className="mt-10">
            <span className="text-orange-500">username</span>
            <div className="flex border-b-2 border-orange-400 mt-2">
              <FaUserAlt className="text-orange-400 mr-4" />
              <input
                className="bg-transparent  focus:outline-none text-orange-400"
                type="text"
                placeholder="Type your username"
              />
            </div>
          </div>
          <div className="mt-10">
            <span className="text-orange-500">password</span>
            <div className="flex border-b-2 border-orange-400 mt-2">
              <FaLock className="text-orange-400 mr-4" />
              <input
                className="bg-transparent  focus:outline-none text-orange-400"
                type="text"
                placeholder="Type your password"
              />
            </div>
            <p className="text-right w-full mt-5 text-orange-400 cursor-pointer">
              Forgot password?
            </p>
          </div>
          <button className="text-white bg-orange-400 text-xl px-10 py-2 rounded-md mt-20 mb-10 ">
            Login
          </button>
        </div>
        <div className="w-1/2 hidden lg:flex">
          <img className="wa" src={employee} alt="Employee of the month svg" />
        </div>
      </div>
    </div>
  );
};

export default Login;
