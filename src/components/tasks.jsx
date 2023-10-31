
import { useEffect, useState } from "react";
import { Popover } from "react-tiny-popover";
import { GiCancel } from "react-icons/gi";
import {
  FaEdit,
  FaTrash,
  FaTasks,
  FaCheck,
  FaShare,
  FaCheckCircle,
} from "react-icons/fa";

import { MdNoteAdd } from "react-icons/md";
import axios from "axios";

const Tasks = () => {
        useEffect(() => {
          axios.get("http://localhost:8000/api/task").then(({ data }) => {
            setData(data);
          });
        }, []);
        const updateData = () => {
          axios.get("http://localhost:8000/api/task").then(({ data }) => {
            setData(data);
          });
        };
        const deleteTask = (id) =>{
          axios.delete(`http://localhost:8000/api/task/delete/${id}`).then(()=>{
            updateData();
          });
        }
        const [data, setData] = useState([]);
        const updateTask = (e) => {
          e.preventDefault();
          const { title, discription, type, due_date, priority } = e.target;
          const i = index;
          const oneData = data[i];
          const updateTaskData = {
            title: title[i].value == "" ? oneData.title : title[i].value,
            discription:
              discription[i].value == "" ? oneData.discription : discription[i].value,
            type: type[i].value == "" ? oneData.type : type[i].value,
            due_date: due_date[i].value == "" ? oneData.due_date : due_date[i].value,
            priority: priority[i].value == "" ? oneData.priority : priority[i].value,
          };
          axios
            .post(`http://localhost:8000/api/task/update/${oneData.id}`, updateTaskData)
            .then((res) => {
              setEdit(!edit);
              updateData();
              console.log(res);
            });
        };
        const [edit, setEdit] = useState();
        const [index,setIndex] = useState();
        const tableHeading = [
          "No.",
          "Title",
          "Type",
          "Discription",
          "DueDate",
          "Priority",
          "Status",
          "Created By",
          "ID",
          "",
        ];
        const [isPopoverOpen, setIsPopoverOpen] = useState(false);
        const [counter, setCounter] = useState();
        const [toggle, setToggle] = useState(false);
        const input = [
          { title: "Title", type: "text", name: "title" },
          { title: "Type", type: "text", name: "type" },
        ];
        const handleSubmit = (e) => {
          e.preventDefault();
          const data = new FormData(e.target);
          axios
            .post("http://localhost:8000/api/task", data, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((res) => {
              updateData();
              setToggle(!toggle);
            });
        };
        const getEmployeeData = () =>{
            axios.get("http://localhost:8000/api/employee").then(({ data }) => {
                setEmployeeData(data);
    });
        }
        const assignEmployee = (id)=>{
            axios.post('http://localhost:8000/api/assign-task',{employee_id:id,task_id:taskId,admin_id:1}).then(({data})=>{console.log(data)})
        }
        const [employeeData,setEmployeeData] = useState([])
        const [taskId,setTaskId]=useState();
        const [toggle2,setToggle2]= useState(false);
        const currentDate = new Date();
        return (
          <div className="relative sm:static">
            <div
              onClick={() => {
                setToggle(!toggle);
              }}
              className={`${
                toggle ? "" : "hidden"
              }  absolute sm:fixed top-0 bottom-0 left-0 right-0 backdrop-blur-md flex justify-center`}
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

      <div className={`max-h-72 ${toggle2?"":"hidden"} absolute z-20 center -mt- border-2 border-primary-500 rounded-lg overflow-y-auto`}>
        <table className="relative">
          <thead className="bg-primary-500 text-white sticky top-0">
            <td></td>
            <td className="text-center ">Assign To:</td>
            <td></td>
          </thead>
          <tbody className="bg-white">
            {employeeData.map((employee, index) => (
              <tr key={index} className={`${index % 2 == 0 ? "bg-gray-100" : ""} fle justify-between items-center`}>
                <td className="p-2 bg-primary-500 text-white">{index + 1}</td>
                <div
                onClick={()=>{assignEmployee(employee.id)}}
                className="flex justify-between pt-2 text-green-200 hover:text-green-500 cursor-pointer">
                <td className="px-2 text-primary-500">{employee.first_name+" "+employee.last_name}</td>
                <td className="px-2 text-primary-500">{employee.role}</td>
                <td className="px-5">
                  <FaCheckCircle className="text-lg " />
                </td></div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
            <div
              className={`absolute right-0 left-0 sm:static ${
                toggle ? "" : "hidden"
              }`}
            >
              <div className=" bg-primary-500 flex justify-center sm:block sm:bg-transparent sm:fixed sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-10 text-white ">
                <div className="rounded-xl bg-primary-500 sm:mt-4 p-10  sm:px-48 flex flex-col items-center w-5/6 sm:w-full sm:border">
                  <FaTasks className="text-6xl text-center w-full" />
                  <form onSubmit={handleSubmit} className="flex flex-col">
                    {input.map((input, index) => (
                      <div
                        className="mt-5 flex items-center justify-center"
                        key={index}
                      >
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
                            placeholder={`Type your ${input.name}`}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="mt-5 flex items-center justify-center">
                      <label
                        htmlFor="due_date"
                        className="font-semibold text-md mr-2"
                      >
                        Due-Date:
                      </label>
                      <div className="border-b border-white mt-2">
                        <input
                          className="bg-transparent  focus:outline-none text-white"
                          type="date"
                          name="due_date"
                          placeholder={`Date`}
                          min={currentDate.toISOString().split("T")[0]}
                        />
                      </div>
                    </div>
                    <div className="mt-5 flex flex-col items-end justify-end ">
                      <div className="flex">
                        <label
                          htmlFor="discription"
                          className="font-semibold text-md mr-2"
                        >
                          Discription:
                        </label>
                        <textarea
                          className="focus:outline-none text-primary-500"
                          name="discription"
                          cols="25"
                          rows="4"
                        ></textarea>
                      </div>
                      <div>
                        <label
                          htmlFor="priority"
                          className="font-semibold text-md mr-2"
                        >
                          Priority:
                        </label>
                        <select name="priority" className="text-primary-500 mt-5">
                          <option value="hight">High</option>
                          <option value="medium">Medium</option>
                          <option value="low">Low</option>
                        </select>
                      </div>
                      <div className="flex ">
                        <label
                          htmlFor="discription"
                          className="font-semibold text-md mr-2"
                        >
                          File:
                        </label>
                        <input
                          className="focus:outline-none"
                          name="file"
                          type="file"
                        ></input>
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
            <div className="bg-white xl:flex justify-center flex-col items-center">
              <div className="overflow-x-auto   ">
      
                {/* Show Tasks in table*/}
      
                <form onSubmit={updateTask}>
                  <table
                    className="text-primary-500 mt-5"
                    onClick={() => {
                      if (isPopoverOpen) {
                        setIsPopoverOpen(!isPopoverOpen);
                      }
                    }}
                  >
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
                          <td className="px-5 truncate">{data.title}</td>
                          <td className="px-5 truncate">{data.type}</td>
                          <td className="px-5 ">
                            <Popover
                              className="hidden"
                              isOpen={isPopoverOpen}
                              positions={["bottom", "left", "right"]}
                              content={
                                <div
                                  className={`${
                                    counter == data.id ? "" : "hidden"
                                  } bg-white px-2 pb-1 text-primary-500 border border-primary-500 rounded-sm`}
                                >
                                  {data.discription}
                                </div>
                              }
                            >
                              <div
                                onClick={() => {
                                  setIsPopoverOpen(!isPopoverOpen);
                                  setCounter(index + 1);
                                }}
                                className="truncate overflow-hidden w-64"
                              >
                                {data.discription}
                              </div>
                            </Popover>
                          </td>
                          <td className="px-5 truncate">{data.due_date}</td>
                          <td className="px-5">{data.priority}</td>
                          <td className="px-5">{data.status}</td>
                          <td className="px-5 truncate">{data.created_by}</td>
                          <td className="px-5">{data.id}</td>
                          <td className="flex gap-5 text-lg py-3">
                            <FaShare 
                             onClick={() => {
                                getEmployeeData();
                                setToggle2(!toggle2);
                                setTaskId(data.id)
                              }}
                            className="text-green-300 hover:text-green-500 cursor-pointer"/>
                            <FaEdit
                              className="cursor-pointer text-yellow-200 hover:text-yellow-500"
                              onClick={() => {
                                setEdit(data.id);
                                setIndex(index);
                              }}
                            />
                            <FaTrash className="text-red-200 hover:text-red-500 cursor-pointer mr-2" onClick={()=>{deleteTask(data.id)}}/>
                            
                          </td>
                        </tr>
      
                        {/* Edit Tasks in Table */}
                        
                        <tr
                          className={`border mb-2 ${edit == data.id ? "" : "hidden"}`}
                        >
                          <td className="bg-green-500 text-white">Editing</td>
                          <td>
                            <input
                              name={`title`}
                              type="text"
                              className="border w-full outline-none"
                            />
                          </td>
                          <td>
                            <input
                              name={`type`}
                              type="text"
                              className="border w-full outline-none"
                            />
                          </td>
                          <td>
                            <input
                              name={`discription`}
                              type="text"
                              className="border w-full outline-none"
                            />
                          </td>
                          <td>
                            <input
                              name={`due_date`}
                              type="date"
                              className="border w-full outline-none"
                            />
                          </td>
                          <td>
                            <select
                              name={`priority`}
                              className="-mt-1 text-primary-500 w-full border outline-none"
                            >
                              <option value="high">High</option>
                              <option value="medium">Medium</option>
                              <option value="low">Low</option>
                            </select>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td className="flex items-center mt-1 justify-around text-lg">
                            <button type="submit">
                              <FaCheck
                                
                                className="text-green-300 hover:text-green-500 cursor-pointer"
                              />
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
                <MdNoteAdd
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
 
export default Tasks;