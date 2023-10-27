import { Link } from "react-router-dom";
const WelcomePage = () => {
  return (
    <div className=" md:flex justify-center">
        <div className="flex justify-center flex-col items-center mt-10 sm:mt-20">

      <div
        className=" text-5xl text-center text-orange-400 drop-shadow-2xl px-2 md:text-6xl"
        style={{ fontFamily: "irish grover" }}
      >
        Organize your work and life finally
      </div>
      <div className="text-2xl px-2 mt-10 text-orange-500 text-center md:w-4/6">
        Become focused, organized, and calm with Todoist. The world’s #1 task
        manager and to-do list app.
      </div>
      <Link to={"/login"}><button className="text-white bg-orange-400 text-xl px-10 py-2 rounded-md mt-20 mb-10 ">
        Login
      </button></Link>
        </div>
    </div>
  );
};

export default WelcomePage;
