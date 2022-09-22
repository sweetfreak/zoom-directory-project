import gql from "graphql-tag";

//do these need to be changed to User1 and Sector2?

export const GET_ME = gql`
  {
    me {
      employeeID
      name
      email
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
    employee {
      employeeID
      name
      email
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
    employee {
      employeeID
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

export const GET_ALL_USERS = gql`
  {
    allUser {
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
    department {
      name
      description
      Employees
    }
  }
`;
