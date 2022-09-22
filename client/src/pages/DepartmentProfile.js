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
      <div className="director-card">
        {/* {employees.map(employee.rank === 1  && ( */}
        <div className="content-card">
          <h2 style={{ textAlign: "center" }}> Directors</h2>
          <ul>
            <li>
              <h3 className="title">{employee.title}</h3>
              name: Elle Woods <br></br>
              email: Elle.Woods@p3ltd.com<br></br>
              employeeID: 20000 <br></br>
              team: HR<br></br>
              title: Director of HR-Legal<br></br>
              startDate: 5/5/05<br></br>
              profileBio: Naturally blonde<br></br>
            </li>
            <a
              href="https://us05web.zoom.us/j/${employee.4575393480}"
              alt="Start Zoom Call"
            >
              <button className="call-btn">Call {employee.name} </button>
            </a>
          </ul>
        </div>
      </div>
      <div className="director-card">
        {/* {employees.map(employee.rank === 2 && ( */}
        <div className="content-card">
          <h2 style={{ textAlign: "center" }}>Managers</h2>
          <ul>
            <li>
              name: Jack Kirby<br></br>
              email: JK1950@p3ltd.com<br></br>
              employeeID: 31000<br></br>
              manager: Elle Woods<br></br>
              team: Recruiting <br></br>
              title: Recruiting Manager <br></br>
              startDate: 1/24/02 <br></br>
              profileBio: i helped build marvel<br></br>
            </li>
            <a
              href="https://us05web.zoom.us/j/${employee.4575393480}"
              alt="Start Zoom Call"
            >
              <button className="call-btn">Call {employee.name} </button>
            </a>
          </ul>
        </div>
      </div>

      <div className="director-card">
        {/* {employees.map(employee.rank === 3 && ( */}
        <div className="content-card">
          <h2 style={{ textAlign: "center" }}>Employees</h2>
          <ul>
            <li>
              name: Spongebob Squarepants<br></br>
              email: jellyfish@p3ltd.com<br></br>
              employeeID: 31040<br></br>
              manager: Jack Kirby<br></br>
              team: HR<br></br>
              title: Employment Dpecialist<br></br>
              startDate: 5/4/98<br></br>
              profileBio: I love krabby patties
            </li>
            <a
              href="https://us05web.zoom.us/j/${employee.4575393480}"
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
