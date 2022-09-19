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



        </main>
    )
}