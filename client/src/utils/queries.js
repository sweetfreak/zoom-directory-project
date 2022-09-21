import gql from "graphql-tag";

//do these need to be changed to User1 and Sector2?


export const GET_ME = gql`
{
    User {
       _id
       name
       email
       employeeID
       zoomMeetingID
       manager
       organization
       department
       team
       title
       startDate
       salary
       profileBio
       rank
   }    
}
`;


export const GET_USER_AS_DIRECTOR = gql`
    {
         User {
            _id
            name
            email
            employeeID
            zoomMeetingID
            manager
            organization
            department
            team
            title
            startDate
            salary
            profileBio
            rank
        }    
    }
`;

export const GET_USER_BASIC = gql`
    {
        User {
            _id
            name
            email
            zoomMeetingID
            manager
            organization
            department
            team
            title
            profileBio
        }
    }
`;

export const GET_DEPARTMENT = gql`
    {
        Department {
            name
            description
            Employees
        }
    }
`;
