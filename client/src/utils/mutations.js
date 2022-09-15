import gql from "graphql-tag";

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String
    $lastName: String
    $employeeUsername: String
    $email: String
    $employeeID: String
    $zoomMeetingID: Int
    $manager: String
    $organization: String
    $department: String
    $team: String
    $title: String
    $startDate: String
    $salary: Int
    $profileBio: String
    $rank: Int
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      employeeUsername: $employeeUsername
      email: $email
      employeeID: $employeeID
      zoomMeetingID: $zoomMeetingID
      manager: $manager
      organization: $organization
      department: $department
      team: $team
      title: $title
      startDate: $startDate
      salary: $salary
      profileBio: $profileBio
      rank: $rank
    ) {
      token
      user {
        _id
        username
        rank
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        rank
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser(
    $firstName: String
    $lastName: String
    $employeeUsername: String
    $email: String
    $employeeID: String
    $zoomMeetingID: Int
    $manager: String
    $organization: String
    $department: String
    $team: String
    $title: String
    $startDate: String
    $salary: Int
    $profileBio: String
    $rank: Int
  ) {
    deleteUser(
      firstName: $firstName
      lastName: $lastName
      employeeUsername: $employeeUsername
      email: $email
      employeeID: $employeeID
      zoomMeetingID: $zoomMeetingID
      manager: $manager
      organization: $organization
      department: $department
      team: $team
      title: $title
      startDate: $startDate
      salary: $salary
      profileBio: $profileBio
      rank: $rank
    )
  }
  {
    username
  }
`;
