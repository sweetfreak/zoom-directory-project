import gql from "graphql-tag";

export const GET_USER = gql`
    {
         User {
            _id
            firstName
            lastName
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
`;
