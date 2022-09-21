import React from "react";
import Auth from "../utils/auth";

import {useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client';

import {GET_USER_BASIC, GET_DEPARTMENT} from '../utils/queries';
import auth from "../utils/auth";

const DepartmentProfile = ({employees}) => {

//this isn't going to work because we need to either call the department's array of employees, OR get all employees and filter only the employees who are in this department.


// Need to GET list of users in the department
    const {department: name} = useParams();

    const {loading, data} = useQuery(GET_USER_BASIC, {variables: {department: name}})

    const employee = data?.user || {}

    const loggedIn = auth.loggedIn();

    if (loading) {
        return <div>Loading...</div>;
      }

    return (

        <div>
            CEO
           <div className="CEO-card">
            {employees.map(employee.rank === 1 && employee.title === "CEO" && (
                <div>
                    <ul>
                        <li><h3 className="title">{employee.title}</h3></li>
                        <li><p>for the {employee.team} team.</p></li>
                        <li><h4 className="name">{employee.name}</h4></li>
                        {/* this zoom stuff is incorrect */}
                        {/* <li><a href="https://us05web.zoom.us/j/${employee.zoomMeetingID}" alt='Start Zoom Call'><button className="call-btn">Call {employee.name} </button></a> </li> */}
                    </ul>
                </div>
            ))}
           </div>
           Directors
           <div className="director-card">
           {employees.map(employee.rank === 1 && employee.title !== "CEO" && (
                <div>
                    <ul>
                        <li><h3 className="title">{employee.title}</h3></li>
                        <li><p>for the {employee.team} team.</p></li>
                        <li><h4 className="name">{employee.name}</h4></li>
                        {/* this zoom stuff is incorrect */}
                        {/* <li><a href="https://us05web.zoom.us/j/${employee.zoomMeetingID}" alt='Start Zoom Call'><button className="call-btn">Call {employee.name} </button></a> </li> */}
                    </ul>
                </div>
            ))}             
           </div>
           Managers
           <div className="director-card">
           {employees.map(employee.rank === 2 && (
                <div>
                    <ul>
                        <li><h3 className="title">{employee.title}</h3></li>
                        <li><p>for the {employee.team} team.</p></li>
                        <li><h4 className="name">{employee.name}</h4></li>
                        {/* this zoom stuff is incorrect */}
                        {/* <li><a href="https://us05web.zoom.us/j/${employee.zoomMeetingID}" alt='Start Zoom Call'><button className="call-btn">Call {employee.name} </button></a> </li> */}
                    </ul>
                </div>
            ))}             
           </div>
           Employees
           <div className="director-card">
           {employees.map(employee.rank === 3 && (
                <div>
                    <ul>
                        <li><h3 className="title">{employee.title}</h3></li>
                        <li><p>for the {employee.team} team.</p></li>
                        <li><h4 className="name">{employee.name}</h4></li>
                        {/* this zoom stuff is incorrect */}
                        {/* <li><a href="https://us05web.zoom.us/j/${employee.zoomMeetingID}" alt='Start Zoom Call'><button className="call-btn">Call {employee.name} </button></a> </li> */}
                    </ul>
                </div>
            ))}             
           </div>
        </div>
        
    );
};

export default DepartmentProfile;
