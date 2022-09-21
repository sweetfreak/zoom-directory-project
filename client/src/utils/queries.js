import gql from "graphql-tag";

export const GET_ME = gql`
{
    User {
       _id
       name
       employeeUsername
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
            employeeUsername
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
            employeeUsername
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
