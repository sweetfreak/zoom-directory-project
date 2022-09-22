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
    <ul>
      <li>
        <h4>Name: </h4>Clark Kent
      </li>
      <li>Title: Digital Marketer</li>
      <li>Department: Advertising</li>
      <li>Team: Digital</li>
      <li>Manager: Perry White</li>
      <li>
        <a
          href="https://us05web.zoom.us/j/${employee.4575393480}"
          alt="Start Zoom Call"
        >
          <button className="call-btn">Call {employee.name} </button>
        </a>
      </li>
      {/* {currentUser.rank === 1 && ( */}
      <div>
        <li>Salary: 90000 </li>
        <li>Employee Start Data: 11/11/2011 </li>
        <li>Employee ID: 10001</li>
        <button onClick={handleClick}>Update Info</button>
      </div>
      {/* })} */}
    </ul>
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
