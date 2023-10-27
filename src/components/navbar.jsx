import { useState } from "react";
import Logo from "./../assets/Logo.svg";
import { FaRegUserCircle } from "react-icons/fa";
import { FaGear, FaPrint, FaChartLine } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";
const Navbar = () => { 
   const [toggle,setToggle] = useState(false);
  return (
    <div className="">
      <div className="flex justify-around py-2 bg-gray-100 relative z-20 sm:z-0">
        <img className="h-10 md:h-16" src={Logo} alt="logo" />
        <div className="text-4xl text-orange-400 md:text-6xl cursor-pointer">
          <FaRegUserCircle onClick={()=>{setToggle(!toggle)}}/>
        </div>
      </div>
      <div className={`w-full ${toggle?"":"hidden"}`}>
      <div>
      <div onClick={()=>{setToggle(!toggle)}}
      className={`${toggle?"":"hidden"} fixed top-0 bottom-0 left-0 right-0 backdrop-blur-md sm:z-10`}></div>

      <div className="relative sm:static">
        <div className="absolute top-0 z-10 sm:w-96 sm:h-screen left-0 right-0 bg-primary-400 text-gray-100 rounded-bl-2xl rounded-br-2xl sm:rounded">
          <div className="flex items-center ml-10 gap-5 border-b p-5">
            <div className="text-7xl">
              <FaRegUserCircle />
            </div>
            <div className="flex flex-col font-medium ">
              <span className="text-xl">Berhanu Negash</span>
              <span className="font-light">birhanunegash9@gmail.com</span>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col gap-5 ">
            <div className="flex w-5/12 gap-5 mt-10 sm:mt-20 hover:text-gray-200 cursor-pointer">
              <FaGear className="text-3xl" />
              <div className="text-xl">Settings</div>
            </div>
            <div className="flex w-5/12 gap-5 hover:text-gray-200 cursor-pointer">
              <FaChartLine className="text-3xl" />
              <div className="text-xl">Activity Log</div>
            </div>
            <div className="flex w-5/12 gap-5 mb-16 hover:text-gray-200 cursor-pointer">
              <FaPrint className="text-3xl" />
              <div className="text-xl">Print</div>
            </div>
            <div className="flex  mb-10 w-5/12 gap-5 bottom hover:text-gray-200 cursor-pointer">
              <MdOutlineLogout className="text-3xl" />
              <div className="text-xl">Log Out</div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};


export default Navbar;
