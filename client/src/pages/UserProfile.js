import React from "react";
import Auth from "../utils/auth";
import { useParams, Navigate } from "react-router-dom";

import { useQuery, useMutation } from "@apollo/client";
import {
  GET_USER_BASIC,
  GET_USER_AS_DIRECTOR,
  GET_ME,
  GET_DEPARTMENT,
} from "../utils/queries";
import { UPDATE_USER } from "../utils/mutations";

const UserProfile = (props) => {
  const { employeeID: userParam } = useParams();

  const [updateUser] = useMutation(UPDATE_USER);

  //HOW TO GET MORE INFO IF YOU'RE A DIRECTOR??????
  const { loading, data } = useQuery(userParam ? GET_USER_BASIC : GET_ME, {
    variables: { employeeID: userParam },
  });
  ////????????

  const employee = data?.user || {};
  const currentUser = data?.me;

  if (loading) {
    return <div>Loading...</div>;
  }

  // const loggedIn = Auth.loggedIn();
  // if (!loggedIn) {
  //   return <Navigate to="/login"/>;
  // }

  //we can make this happen, but maybe this should be on a whole separate page for updating a user? The button on this page could link to another page. OR turn everything into a textarea?
  const handleClick = async () => {
    try {
      await updateUser({
        variables: { employeeID: employee.employeeID },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <center className="profile">
      <h2>Profile of</h2>
      <h1>Clark Kent</h1>
      <div className="user-Front-container">

        <li><span className="bold-word">Title:</span> Digital Marketer</li>
        <li><span className="bold-word">Department:</span> Advertising</li>
        <li><span className="bold-word">Team:</span> Digital</li>
        <li><span className="bold-word">Manager:</span> Perry White</li>
      </div>
      <br />
      <li>
        <a
          href="https://us05web.zoom.us/j/${employee.4575393480}"
          alt="Start Zoom Call"
        >
          {/*className="call-btn"*/}
          <button>Call {employee.name} </button>
        </a>
      </li>
      <br />
      {/* {currentUser.rank === 1 && ( */}
      <div className="user-Back-container">
        <h4>Upper Management Information</h4>
        <li><span className="bold-word">Salary:</span> 90000 </li>
        <li><span className="bold-word">Employee Start Data:</span> 11/11/2011 </li>
        <li><span className="bold-word">Employee ID:</span> 10001</li>
      </div>
      <br />
      <button onClick={handleClick}>Update Info</button>
      <br />

      {/* })} */}
    </center>
  );
};

export default UserProfile;

{
  /* <ul>
        
<li>Name: {employee.name}</li>
<li>Title: {employee.title}</li>
<li>Department: {employee.department}</li>
<li>Team: {employee.team}</li>
<li>Manager: {employee.manager}</li>
<li>Zoom ID: {employee.zoomMeetingID} <button className="call-btn">Start Meeting</button></li>
{currentUser.rank === 1 && (
    <div>
        <li>Salary: {employee.salary} </li>
        <li>Employee Start Data: {employee.startDate} </li>
        <li>Employee ID: {employee.employeeID}</li>
        <button onClick={handleClick}>Update Info</button>
    </div>   
)}


</ul> */
}
