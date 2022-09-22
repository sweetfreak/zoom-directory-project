import React, { useEffect, useState } from "react";
//import the user query
import { useQuery } from "@apollo/client";

import { GET_USER_BASIC, GET_ALL_USERS } from "../utils/queries";

//here we created the function

console.log(window.location.href);
const html = window.location.href;

const thisDept = html.substring(html.indexOf("department") + 1);
console.log(thisDept);
const thisDept2 = thisDept.substring(thisDept.indexOf("/") + 1);
console.log(thisDept2);

const DepartmentProfile = () => {
  //this isn't going to work because we need to either call the department's array of employees, OR get all employees and filter only the employees who are in this department.

  //need to check if department exists

  //Pull all user data
  const { loading, data } = useQuery(GET_ALL_USERS);
  const employee = "test";
  const allEmployees = data?.allUser; //|| {};

  console.log(allEmployees);

  //     const deptEmployees = [];

  //     function pullDeptEmployees(employee) {
  //       if (employee.department == thisDept2) {
  //         deptEmployees.push(employee);
  //       }
  //     }
  //     data.forEach(pullDeptEmployees);
  //   const [employeesAll, setEmployeesAll] = useState(())

  //   const [currentDept, setCurrentDept] = useState([]);

  //   useEffect(() => {
  //     setCurrentDept(thisDept2);
  //   });
  //   const loggedIn = auth.loggedIn();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card e-card-horizontal">
      <div className="director-card deptCard">
        {/* {employees.map(employee.rank === 1  && ( */}
        <div className="content-card">
          <h2 style={{ textAlign: "center" }}> Directors</h2>
          <ul>
            <li>
              <h3 className="title">{employee.title}</h3>
              <p><span className="bold-word">Name:</span> Elle Woods</p>
              <p><span className="bold-word">Email: </span>Elle.Woods@p3ltd.com</p>
              <p><span className="bold-word">EmployeeID:</span> 20000 </p>
              <p><span className="bold-word">Director of:</span> Director of HR </p>              
              <p><span className="bold-word">Team:</span> HR</p>
              <p><span className="bold-word">Title: </span>Director of HR-Legal</p>
              <p><span className="bold-word">Start Date:</span> 5/5/05</p>
              <p><span className="bold-word">Profile Bio:</span> Naturally blonde</p>
            </li>
            <a
              href="https://us05web.zoom.us/j/${employee.4575393480}" target="-blank"
              alt="Start Zoom Call"
            >
              <button className="call-btn">Call {employee.name} </button>
            </a>
          </ul>
        </div>
      </div>
      <div className="manager-card deptCard">
        {/* {employees.map(employee.rank === 2 && ( */}
        <div className="content-card">
          <h2 style={{ textAlign: "center" }}>Managers</h2>
          <ul>
          <li>
              <h3 className="title">{employee.title}</h3>
              <p><span className="bold-word">Name:</span> Jack Kirby</p>
              <p><span className="bold-word">Email: </span>JK1950@p3ltd.com</p>
              <p><span className="bold-word">EmployeeID:</span> 31040 </p>
              <p><span className="bold-word">Manager:</span> Elle Woods </p>
              <p><span className="bold-word">Team:</span> Recruiter</p>
              <p><span className="bold-word">Title: </span> Recruiting Manager</p>
              <p><span className="bold-word">Start Date:</span> 1/24/02</p>
              <p><span className="bold-word">Profile Bio:</span> I helped build marvel</p>
            </li>
            <a
              href="https://us05web.zoom.us/j/${employee.4575393480}" target="-blank"
              alt="Start Zoom Call"
            >
              <button className="call-btn">Call {employee.name} </button>
            </a>
          </ul>
        </div>
      </div>

      <div className="employee-card deptCard">
        {/* {employees.map(employee.rank === 3 && ( */}
        <div className="content-card">
          <h2 style={{ textAlign: "center" }}>Employees</h2>
          <ul>
            <li>
              <h3 className="title">{employee.title}</h3>
              <p><span className="bold-word">Name:</span> Spongebob Squarepants</p>
              <p><span className="bold-word">Email: </span>jellyfish@p3ltd.com</p>
              <p><span className="bold-word">EmployeeID:</span> 31040 </p>
              <p><span className="bold-word">Manager</span> Jack Kirby </p>
              <p><span className="bold-word">Team:</span> HR</p>
              <p><span className="bold-word">Title: </span> Employment Specialist</p>
              <p><span className="bold-word">Start Date:</span> 5/4/98</p>
              <p><span className="bold-word">Profile Bio:</span> I love krabby patties</p>
            </li>
            <a
              href="https://us05web.zoom.us/j/${employee.4575393480}" target="-blank"
              alt="Start Zoom Call"
            >
              <button className="call-btn">Call {employee.name} </button>
            </a>
          </ul>
        </div>
        {/* ))}              */}
      </div>
    </div>
  );
};

export default DepartmentProfile;
