import { useState } from "react";
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
  const [toggle, setToggle] = useState(false);
  const analaysis = [
    { title: "Tasks completed per Month", id: 0 },
    { title: "Tasks completed per employee", id: 1 },
    { title: "Tasks completed per employee", id: 2 },
  ];
  const [i, setI] = useState(0);
  const [close, setClose] = useState(true);
  return (
    <div>
      <DashboardNav />
      <div className="bg-white w-full flex justify-center items-center flex-col ">
        {analaysis.map((data, index) => (
          <div className={`w-11/12`} key={data.id}>
            <div
              onClick={() => {
                setI(index);
              }}
              className={`${
                i == analaysis[index].id
                  ? "text-primary-500 bg-slate-100"
                  : "hover:bg-primary-300 text-white"
              } cursor-pointer   py-5 bg-primary-400 rounded-lg text-center mt-2 duration-1000`}
            >
              {data.title}
            </div>
            <div className="overflow-hidden flex justify-center">
              <div
                className={`w-5/6 duration-700 max-w-xl ${
                  i == analaysis[index].id ? "mt-2" : "-mt-56 sm:-mt-72"
                }`}
              >
                <Charts />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DashboardNav = () => {
  const navLink = [
    { link: "home", title: "Home" },
    { link: "employee", title: "Employee" },
    { link: "task", title: "Task" },
    { link: "notification", title: "Notification" },
  ];
  return (
    <div>
      <div className="flex justify-between px-5 py-2 items-center text-primary bg-white underline md:hidden text-primary-500">
        <HiOutlineMenu className="text-4xl cursor-pointer" />
        <p>admin/home</p>
      </div>
      <div className="hidden md:flex bg-primary-500">
        {navLink.map((link, index) => (
          <span
            key={link.link}
            className={`cursor-pointer md:px-5 lg:px-10 py-2 mt-3 rounded-tl-xl rounded-tr-xl text-xl text-white hover:text-primary-500 hover:bg-white ${
              index == 0 ? "ml-5" : ""
            }`}
          >
            {link.title}
          </span>
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
export default Dashboard;
