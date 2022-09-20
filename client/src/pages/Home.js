import React from 'react';
import Navbar from '../components/Nav/NavBar';
import SearchTool from '../components/SearchTool/SearchTool'


import Auth from '../utils/auth';
// import { useQuery } from '@apollo/client';
// import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';

const Home = () => {
    
    const loggedIn = Auth.loggedIn();

    //if not logged in, redirect to login/signup page
    return (
        <main> 
            <p>Welcome to the COMPANY Directory</p>

        Choose a department from the drop down menu above.

        Your info:
        <ul>

        </ul>
        <li>Name:</li>
        <li>Title:</li>
        <li>Employee ID:</li>
        <li>Department Page:</li>
        <li>Manager: </li>
        <li>Zoom ID:
        <button>Start Call</button></li>
        <li>Email:</li>
        <li>Phone:</li>
        <li>Start Date:</li>
        <li>Your Salary:</li>

        Bio:
        <button>Edit Bio</button>


        </main>
    )
}

export default Home;