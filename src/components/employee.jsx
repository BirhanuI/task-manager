import { useEffect, useState } from "react";
import { Popover } from "react-tiny-popover";
import { GiCancel } from "react-icons/gi";
import {
  FaEdit,
  FaTrash,
  FaCheck,
  FaShare,
  FaUser,
  FaCheckCircle,
} from "react-icons/fa";
import {FaListCheck} from 'react-icons/fa6'
import axios from "axios";
import { HiUserAdd } from "react-icons/hi";

const Employee = () => {
  useEffect(() => {
    axios.get("http://localhost:8000/api/employee").then(({ data }) => {
      setData(data);
    });
  }, []);
  const updateData = () => {
    axios.get("http://localhost:8000/api/employee").then(({ data }) => {
      setData(data);
    });
  };
  const deleteEmployee = (id) => {
    axios
      .delete(`http://localhost:8000/api/employee/delete/${id}`)
      .then(({ data }) => {
        updateData();
        console.log(data);
      });
  };
  const [data, setData] = useState([]);
  const updateEmployee = (e) => {
    e.preventDefault();
    const { first_name, last_name, email, phone, address, role } = e.target;
    const i = index;
    const oneData = data[i];
    const updateTaskData = {
      first_name: first_name[i].value
        ? first_name[i].value
        : oneData.first_name,
      last_name: last_name[i].value ? last_name[i].value : oneData.last_name,
      email: email[i].value ? email[i].value : oneData.email,
      phone: phone[i].value ? phone[i].value : oneData.phone,
      address: address[i].value ? address[i].value : oneData.address,
      role: role[i].value ? role[i].value : oneData.role,
    };
    axios
      .post(
        `http://localhost:8000/api/employee/update/${oneData.id}`,
        updateTaskData
      )
      .then((res) => {
        setEdit(!edit);
        updateData();
        console.log(res);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    axios.post("http://localhost:8000/api/employee", data).then((res) => {
      updateData();
      setToggle(!toggle);
    });
  };
  const getTaskData = () => {
    axios.get("http://localhost:8000/api/task").then(({ data }) => {
      setTaskData(data);
    });
  };
  const assignTask = (id) => {
    axios
      .post("http://localhost:8000/api/assign-task", {
        employee_id: employeeId,
        task_id: id,
        admin_id: 1,
      })
      .then(({ data }) => {
        console.log(data);
      });
  };
  const [employeeId, setEmployeeId] = useState();
  const [taskData, setTaskData] = useState([]);
  const input = [
    { title: "First Name", type: "text", name: "first_name" },
    { title: "Last Name", type: "text", name: "last_name" },
    { title: "Email", type: "email", name: "email" },
    { title: "Phone", type: "number", name: "phone" },
    { title: "Address", type: "text", name: "address" },
    { title: "Role", type: "text", name: "role" },
  ];
  const [edit, setEdit] = useState();
  const [index,setIndex] =useState();
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const tableHeading = [
    "No.",
    "First Name",
    "Last Name",
    "Email",
    "Phone",
    "Address",
    "Role",
    "ID",
    "",
  ];

  return (
    <div className="relative sm:static">
      <div
        onClick={() => {
          setToggle(!toggle);
        }}
        className={`${
          toggle ? "" : "hidden"
        }  absolute z-10 sm:fixed top-0 bottom-0 left-0 right-0 backdrop-blur-md flex justify-center`}
      ></div>
      <div
        onClick={() => {
          setToggle2(!toggle2);
        }}
        className={`${
          toggle2 ? "" : "hidden"
        }  absolute z-10 sm:fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm flex justify-center`}
      ></div>

      {/* Assign Task */}

      <div
        className={`max-h-72 ${
          toggle2 ? "" : "hidden"
        } absolute z-20 center -mt- border-2 border-primary-500 rounded-lg overflow-y-auto`}
      >
        <table className="relative">
          <thead className="bg-primary-500 text-white sticky top-0">
            <td></td>
            <td className="text-center ">Assign To:</td>
            <td></td>
          </thead>
          <tbody className="bg-white">
            {taskData.map((task, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 == 0 ? "bg-gray-100" : ""
                } fle justify-between items-center`}
              >
                <td className="p-2 bg-primary-500 text-white">{index + 1}</td>
                <div
                  onClick={() => {
                    assignTask(task.id);
                  }}
                  className="flex justify-between pt-2 text-green-200 hover:text-green-500 cursor-pointer"
                >
                  <td className="px-2 text-primary-500">{task.title}</td>
                  <td className="px-5">
                    <FaCheckCircle className="text-lg " />
                  </td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Employee Registration Form */}

      <div
        className={`absolute right-0 left-0 sm:static ${
          toggle ? "" : "hidden"
        }`}
      >
        <div className=" bg-primary-500 flex justify-center sm:block sm:bg-transparent sm:fixed sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-10 text-white ">
          <div className="rounded-xl bg-primary-500 sm:mt-4 p-10  sm:px-48 flex flex-col items-center w-5/6 sm:w-full sm:border">
            <FaUser className="text-6xl text-center w-full" />
            <form onSubmit={handleSubmit} className="flex flex-col">
              {input.map((input, index) => (
                <div className="mt-5 flex items-center justify-end" key={index}>
                  <label
                    htmlFor={input.name}
                    className="font-semibold text-md mr-2"
                  >
                    {input.title}:
                  </label>
                  <div className="border-b border-white mt-2">
                    <input
                      className="bg-transparent  focus:outline-none text-white"
                      type={input.type}
                      name={input.name}
                    />
                  </div>
                </div>
              ))}
              <div className="mt-5 flex items-center justify-end">
                <label htmlFor="isAdmin" className="font-semibold text-md mr-2">
                  isAdmin:
                </label>
                <div className="border-b border-white mt-2">
                  <input
                    className="bg-transparent  focus:outline-none text-white"
                    type="checkbox"
                    name="isAdmin"
                    value={true}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-white text-primary-500 py-2 mt-6 "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Show Employee in table*/}

      <div className="bg-white xl:flex justify-center flex-col items-center">
        <div className="overflow-x-auto   ">
          <form onSubmit={updateEmployee}>
            <table className="text-primary-500 mt-5">
              <thead>
                <tr className="bg-primary-400 text-white relative">
                  {tableHeading.map((heading) => (
                    <td className="px-5 py-3 truncate" key={heading}>
                      {heading}
                    </td>
                  ))}
                </tr>
              </thead>

              {data.map((data, index) => (
                <tbody key={index}>
                  <tr className={`${index % 2 == 0 ? "" : "bg-gray-100"} `}>
                    <td className="px-5 py-2">{index + 1}</td>
                    <td className="px-5 truncate">{data.first_name}</td>
                    <td className="px-5 truncate">{data.last_name}</td>
                    <td className="px-5 "> {data.email}</td>
                    <td className="px-5 truncate">{data.phone}</td>
                    <td className="px-5 truncate">{data.address}</td>
                    <td className="px-5 truncate">{data.role}</td>
                    <td className="px-5">{data.id}</td>
                    <td className="flex gap-5 text-lg py-3">
                        <FaListCheck className="cursor-pointer text-blue-300 hover:text-blue-500"/>
                      <FaShare
                        onClick={() => {
                          getTaskData();
                          setToggle2(!toggle2);
                          setEmployeeId(data.id);
                        }}
                        className="text-green-300 hover:text-green-500 cursor-pointer"
                      />
                      <FaEdit
                        className="cursor-pointer text-yellow-200 hover:text-yellow-500"
                        onClick={() => {
                          setEdit(data.id);
                          setIndex(index);
                        }}
                      />
                      <FaTrash
                        className="text-red-200 hover:text-red-500 cursor-pointer mr-2"
                        onClick={() => {
                          deleteEmployee(data.id);
                        }}
                      />
                    </td>
                  </tr>

                  {/* Edit Employee in Table */}

                  <tr
                    className={`border mb-2 ${edit == data.id ? "" : "hidden"}`}
                  >
                    <td className="bg-green-500 text-white">Editing</td>
                    <td>
                      <input
                        name={`first_name`}
                        type="text"
                        className="border w-full outline-none"
                      />
                    </td>
                    <td>
                      <input
                        name={`last_name`}
                        type="text"
                        className="border w-full outline-none"
                      />
                    </td>
                    <td>
                      <input
                        name={`email`}
                        type="text"
                        className="border w-full outline-none"
                      />
                    </td>
                    <td>
                      <input
                        name={`phone`}
                        type="number"
                        className="border w-full outline-none"
                      />
                    </td>
                    <td>
                      <input
                        name={`address`}
                        type="text"
                        className="border w-full outline-none"
                      />
                    </td>
                    <td>
                      <input
                        name={`role`}
                        type="text"
                        className="border w-full outline-none"
                      />
                    </td>
                    <td></td>
                    <td className="flex items-center mt-1 justify-around text-lg">
                      <button type="submit">
                        <FaCheck className="text-green-300 hover:text-green-500 cursor-pointer" />
                      </button>

                      <GiCancel
                        className="hover:text-red-500 text-red-300 cursor-pointer"
                        onClick={() => {
                          setEdit(-1);
                        }}
                      />
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </form>
        </div>
        <div className="flex md:w-2/4 justify-between my-10 px-5 ">
          <HiUserAdd
            onClick={() => {
              setToggle(!toggle);
            }}
            className="text-primary-500 text-4xl"
            title="Add Employee"
          />
          <div className="flex items-start  md:justify-between ">
            <div className="mr-5 text-primary-500">
              Rows per page{" "}
              <select name="No. of rows" id="">
                <option value="10">10</option>
                <option value="10">15</option>
                <option value="10">20</option>
              </select>
            </div>
            <div className="text-primary-500">{`${"1-8"} of ${
              data.length
            }`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
