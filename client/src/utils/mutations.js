import gql from "graphql-tag";

export const ADD_USER = gql`
  mutation addUser(
    $name: String
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
      name: $name
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
        email
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
        email
        password
      }
    }
  }
`;

export const UPDATE_USER =gql`
  mutation updateUser(
    $name: String
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
  ){
    updateUser(
      name: $name
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
`;

export const DELETE_USER = gql`
  mutation deleteUser(
    $name: String
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
      name: $name
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
    email
  }
`;
