import { Route, Routes ,Link} from "react-router-dom";
import { useState } from "react";
import { Popover } from "react-tiny-popover";
import { FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
const Dashboard = () => {
  return (
    <div>
      <DashboardNav />
      <Routes>
        <Route path={"/"} element={<AdminHome/>} />
        <Route path={"/employee"} element={<Employee />} />
        <Route path={"/task"} element={<Tasks />} />
        <Route path={"/Notification"} element={<Notification />} />
      </Routes>
    </div>
  );
};
export const Notification = () => {
  const analaysis = [
    {
      title: "You've been assigned a new task",
      body: "Hi John, you've been assigned the task 'Update website design'. Please check the task details and start working on it. Let me know if you have any questions.",
      id: 0,
    },
    {
      title: "Tasks completed per employee",
      body: "Hi John, you've been assigned the task 'Update website design'. Please check the task details and start working on it. Let me know if you have any questions.",
      id: 1,
    },
    {
      title: "Tasks completed per employee",
      body: "Hi John, you've been assigned the task 'Update website design'. Please check the task details and start working on it. Let me know if you have any questions.",
      id: 2,
    },
    {
      title: "You've been assigned a new task",
      body: "Hi John, you've been assigned the task 'Update website design'. Please check the task details and start working on it. Let me know if you have any questions.",
      id: 3,
    },
    {
      title: "Tasks completed per employee",
      body: "Hi John, you've been assigned the task 'Update website design'. Please check the task details and start working on it. Let me know if you have any questions.",
      id: 4,
    },
    {
      title: "Tasks completed per employee",
      body: "Hi John, you've been assigned the task 'Update website design'. Please check the task details and start working on it. Let me know if you have any questions.",
      id: 5,
    },
    {
      title: "You've been assigned a new task",
      body: "Hi John, you've been assigned the task 'Update website design'. Please check the task details and start working on it. Let me know if you have any questions.",
      id: 6,
    },
    {
      title: "Tasks completed per employee",
      body: "Hi John, you've been assigned the task 'Update website design'. Please check the task details and start working on it. Let me know if you have any questions.",
      id: 7,
    },
    {
      title: "Tasks completed per employee",
      body: "Hi John, you've been assigned the task 'Update website design'. Please check the task details and start working on it. Let me know if you have any questions.",
      id: 8,
    },
  ];
  const [i, setI] = useState(0);
  const [close, setClose] = useState(true);
  return (
    <div className="bg-white flex">
      <div className="w-full lg:h-96 scrollable-div lg:mt-16 lg:overflow-y-scroll overflow-x-hidden">
        <div className="scrollable-div-inside w-full flex justify-center items-center flex-col lg:relative ">
          {analaysis.map((data, index) => (
            <div
              className={` w-11/12 lg:flex lg:grow lg:gap-20 ${
                index == 0 ? "lg:mt-2" : ""
              } `}
              key={data.id}
            >
              <div
                onClick={() => {
                  setI(index);
                }}
                className={`lg:grow lg:max-w-sm ${
                  i == analaysis[index].id
                    ? "text-primary-500 bg-slate-100"
                    : "hover:bg-primary-300 text-white"
                } cursor-pointer   py-5 bg-primary-400 rounded-t-lg lg:rounded-lg text-center mt-2 duration-1000`}
              >
                {data.title}
              </div>
              <div className="overflow-hidden lg:grow flex justify-center ">
                <div
                  className={`flex justify-center px-5 border duration-700 w-full lg:max-w-xl ${
                    i == analaysis[index].id
                      ? "py-2 lg:fixed lg:top-52 lg:mt-10"
                      : "-mt-56 sm:-mt-72 lg:hidden "
                  }`}
                >
                  <div className="lg:h-full max-w-md lg:max-w-xl">
                    <div className="text-center font-bold text-primary-400 my-5 text-2xl hidden lg:block">
                      {data.title}
                    </div>
                    <div className="lg:mb-10 text-primary-500">{data.body}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export const Employee = () => {
  const data = [
    {
      name: "berhanu",
      age: "23",
      address: "addis ababa",
      phone: "0912874356",
      role: "Frontend developer",
      id: "1",
    },
    {
      name: "berhanu",
      age: "23",
      address: "addis ababa",
      phone: "0912874356",
      role: "Frontend developer",
      id: "1",
    },
    {
      name: "berhanu",
      age: "23",
      address: "addis ababa",
      phone: "0912874356",
      role: "Frontend developer",
      id: "1",
    },
    {
      name: "berhanu",
      age: "23",
      address: "addis ababa",
      phone: "0912874356",
      role: "Frontend developer",
      id: "1",
    },
    {
      name: "berhanu",
      age: "23",
      address: "addis ababa",
      phone: "0912874356",
      role: "Frontend developer",
      id: "1",
    },
    {
      name: "berhanu",
      age: "23",
      address: "addis ababa",
      phone: "0912874356",
      role: "Frontend developer",
      id: "1",
    },
    {
      name: "berhanu",
      age: "23",
      address: "addis ababa",
      phone: "0912874356",
      role: "Frontend developer",
      id: "1",
    },
    {
      name: "berhanu",
      age: "23",
      address: "addis ababa",
      phone: "0912874356",
      role: "Frontend developer",
      id: "1",
    },
  ];
  const tableHeading = [
    "No.",
    "Name",
    "Age",
    "Address",
    "Phone",
    "Role",
    "ID",
    "",
  ];
  return (
    <div>
      <div className="bg-white overflow-x-auto md:flex justify-center flex-col items-center">
        <div>
          <table className="text-primary-500 mt-5">
            <thead>
              <tr className="bg-primary-400 text-white">
                {tableHeading.map((heading,index) => (
                  <td className="px-5 py-3" key={index}>{heading}</td>
                ))}
              </tr>
            </thead>
            {data.map((data, index) => (
              <tbody key={index}>
                <tr className={`${index % 2 == 0 ? "" : "bg-gray-100"}`}>
                  <td className="px-5 py-2">{index + 1}</td>
                  <td className="px-5">{data.name}</td>
                  <td className="px-5">{data.age}</td>
                  <td className="px-5">{data.address}</td>
                  <td className="px-5">{data.phone}</td>
                  <td className="px-5">{data.role}</td>
                  <td className="px-5">{data.id}</td>
                  <td className="flex gap-5 text-lg py-3">
                    <FaEdit className="cursor-pointer" />
                    <FaTrash className="text-red-500 cursor-pointer mr-2" />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <div className="flex  mt-10 justify-between">
            <FaUserPlus
              className="text-primary-500 text-4xl"
              title="Add Employee"
            />
            <div className="flex items-start justify-around w-2/6">
              <div>
                Rows per page{" "}
                <select name="No. of rows" id="">
                  <option value="10">10</option>
                  <option value="10">15</option>
                  <option value="10">20</option>
                </select>
              </div>
              <div>{`${"1-8"} of ${data.length}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Tasks = () => {
  const data = [
    {
      name: "berhanu",
      age: "23",
      address: "addis ababa",
      phone: "0912874356",
      role: "Frontend developer",
      id: "1",
    },
    {
      name: "berhanu",
      age: "23",
      address: "addis ababa",
      phone: "0912874356",
      role: "Frontend developer",
      id: "2",
    },
    {
      name: "berhanu",
      age: "23",
      address: "addis ababa",
      phone: "0912874356",
      role: "Frontend developer",
      id: "3",
    },
    {
      name: "berhanu",
      age: "23",
      address: "addis ababa",
      phone: "0912874356",
      role: "Frontend developer",
      id: "4",
    },
    {
      name: "berhanu",
      age: "23",
      address: "addis ababa",
      phone: "0912874356",
      role: "Frontend developer",
      id: "5",
    },
    {
      name: "berhanu",
      age: "23",
      address: "addis ababa",
      phone: "0912874356",
      role: "Frontend developer",
      id: "6",
    },
    {
      name: "berhanu",
      age: "23",
      address: "addis ababa",
      phone: "0912874356",
      role: "Frontend developer",
      id: "7",
    },
    {
      name: "berhanu",
      age: "23",
      address: "addis ababa",
      phone: "0912874356",
      role: "Frontend developer",
      id: "8",
    },
  ];
  const tableHeading = [
    "No.",
    "Name",
    "Age",
    "Address",
    "Phone",
    "Role",
    "ID",
    "",
  ];
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [counter, setCounter] = useState();
  return (
    <div>
      <div className="bg-white md:flex justify-center flex-col items-center">
        <div className="overflow-x-auto   ">
          <table className="text-primary-500 mt-5">
            <thead>
              <tr className="bg-primary-400 text-white">
                {tableHeading.map((heading) => (
                  <td className="px-5 py-3" key={heading}>
                    {heading}
                  </td>
                ))}
              </tr>
            </thead>
            {data.map((data, index) => (
              <tbody key={index}>
                <tr className={`${index % 2 == 0 ? "" : "bg-gray-100"}`}>
                  <td className="px-5 py-2">{index + 1}</td>
                  <td className="px-5">{data.name}</td>
                  <td className="px-5">{data.age}</td>
                  <td className="px-5 ">
                    <Popover
                      className="hidden"
                      isOpen={isPopoverOpen}
                      positions={["bottom", "left", "right"]}
                      content={
                        <div
                          className={`${
                            counter == data.id ? "" : "hidden"
                          } bg-white p-5 text-primary-500 border border-primary-500 rounded-xl`}
                        >
                          Hi! I'm popover content.
                        </div>
                      }
                    >
                      <div
                        onClick={() => {
                          setIsPopoverOpen(!isPopoverOpen);
                          setCounter(index + 1);
                        }}
                      >
                        {data.address}
                      </div>
                    </Popover>
                  </td>
                  <td className="px-5">{data.phone}</td>
                  <td className="px-5">{data.role}</td>
                  <td className="px-5">{data.id}</td>
                  <td className="flex gap-5 text-lg py-3">
                    <FaEdit className="cursor-pointer" />
                    <FaTrash className="text-red-500 cursor-pointer mr-2" />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="flex md:w-2/4 justify-between my-10 px-5 ">
          <FaUserPlus
            className="text-primary-500 text-4xl"
            title="Add Employee"
          />
          <div className="flex items-start  md:justify-between ">
            <div className="mr-5">
              Rows per page{" "}
              <select name="No. of rows" id="">
                <option value="10">10</option>
                <option value="10">15</option>
                <option value="10">20</option>
              </select>
            </div>
            <div className="">{`${"1-8"} of ${data.length}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const DashboardNav = () => {
  const navLink = [
    { link: "", title: "Home" },
    { link: "employee", title: "Employee" },
    { link: "task", title: "Task" },
    { link: "notification", title: "Notification" },
  ];
  return (
    <div className="border-b md:border-none">
      <div className="flex justify-between px-5 py-2 items-center text-primary bg-white underline md:hidden text-primary-500">
        <HiOutlineMenu className="text-4xl cursor-pointer" />
        <p>admin/home</p>
      </div>
      <div className="hidden md:flex bg-primary-500">
        {navLink.map((link, index) => (
          <Link key={link.link} to={link.link} className=" mt-4"><span
            
            className={`cursor-pointer md:px-5 lg:px-10  rounded-tl-xl rounded-tr-xl text-xl text-white hover:text-primary-500 hover:bg-white ${
              index == 0 ? "ml-5" : ""
            }`}
          >
            {link.title}
          </span></Link>
        ))}
      </div>
    </div>
  );
};
export const Charts = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = ["January", "February", "March", "April", "May", "June"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [50, 434, 432, 422, 242, 234],
        backgroundColor: "rgba(255, 99, 132, 5)",
      },
      {
        label: "Dataset 1",
        data: [59, 404, 132, 522, 292, 534],
        backgroundColor: "rgba(255, 99, 32, 1)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};
export const AdminHome = () => {
  const [toggle, setToggle] = useState(false);
  const analaysis = [
    { title: "Tasks completed per Month", id: 0 },
    { title: "Tasks completed per employee", id: 1 },
    { title: "Tasks completed per employee", id: 2 },
  ];
  const [i, setI] = useState(0);
  const [close, setClose] = useState(true);
  return (
    <div className="bg-white w-full flex justify-center items-center flex-col lg:relative ">
      {analaysis.map((data, index) => (
        <div
          className={`w-11/12 lg:flex lg:grow lg:gap-20 ${
            index == 0 ? "lg:mt-20" : ""
          } `}
          key={data.id}
        >
          <div
            onClick={() => {
              setI(index);
            }}
            className={`lg:grow lg:max-w-sm ${
              i == analaysis[index].id
                ? "text-primary-500 bg-slate-100"
                : "hover:bg-primary-300 text-white"
            } cursor-pointer   py-5 bg-primary-400 rounded-lg text-center mt-2 duration-1000`}
          >
            {data.title}
          </div>
          <div className="overflow-hidden lg:grow flex justify-center ">
            <div
              className={`w-5/6 duration-700 max-w-xl ${
                i == analaysis[index].id
                  ? "mt-2 lg:absolute lg:top-0 lg:mt-10"
                  : "-mt-56 sm:-mt-72 lg:hidden"
              }`}
            >
              <Charts />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Dashboard;
