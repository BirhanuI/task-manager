import { Route, Routes, Link } from "react-router-dom";
import {useState} from "react"
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
import Tasks from "./tasks";
import Employee from "./employee";
import AssignedTasks from "./assignedTasks";
const Dashboard = () => {
  return (
    <div>
      <DashboardNav />
      <Routes>
        <Route path={"/"} element={<AdminHome />} />
        <Route path={"/employee"} element={<Employee />} />
        <Route path={"/task"} element={<Tasks />} />
        <Route path={"/task/employee"} element={<AssignedTasks />}/>
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
          <Link key={link.link} to={link.link} className=" mt-4">
            <span
              className={`cursor-pointer md:px-5 lg:px-10  rounded-tl-xl rounded-tr-xl text-xl text-white hover:text-primary-500 hover:bg-white active:text-primary-500 active:bg-white ${
                index == 0 ? "ml-5" : ""
              }`}
            >
              {link.title}
            </span>
          </Link>
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
