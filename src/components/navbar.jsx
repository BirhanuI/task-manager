import Logo from "./../assets/Logo.svg";
import {FaRegUserCircle} from 'react-icons/fa'
const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-around py-2 bg-gray-100">
        <img className="h-10 md:h-16" src={Logo} alt="logo" />
        <div className="text-4xl text-orange-400 md:text-6xl cursor-pointer"><FaRegUserCircle /></div>
      </div>
    </div>
  );
};

export default Navbar;
