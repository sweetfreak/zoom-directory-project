const { gql } = require("apollo-server-express");

// _id:ID - took this out of typeDef since we have employee IDs

const typeDefs = gql`
  type User {
    firstName: String
    lastName: String
    email: String
    employeeID: Int
    zoomMeetingID: String
    manager: String
    organization: String
    department: Department
    team: String
    title: String
    startDate: String
    salary: Int
    profileBio: String
    rank: Int
    password: String
  }

  type Department {
    name: String
    description: String
    Employees: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    departments: [Department]
    employee(employeeID: Int): User
    deptEmployees(Department: String, name: String): [User]
  }

  type Mutation {
    
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      employeeID: String!
      zoomMeetingID: Int!
      manager: String!
      organization: String!
      department: String!
      team: String!
      title: String!
      startDate: String!
      salary: Int!
      profileBio: String!
      rank: Int!
      password: String!
    ): User

    updateUser(
      firstName: String!
      lastName: String!
      email: String!
      zoomMeetingID: Int!
      manager: String!
      department: String!
      team: String!
      title: String!
      salary: Int!
      profileBio: String!
      rank: Int!
      password: String!
    ): User

    login(email: String!, password: String!): Auth

    deleteUser(
      firstName: String!
      lastName: String!
      email: String!
      employeeID: String!
      zoomMeetingID: Int!
      manager: String!
      organization: String!
      department: String!
      team: String!
      title: String!
      startDate: String!
      salary: Int!
      profileBio: String!
      rank: Int!
      password: String!
    ): User
  }
`;

module.exports = typeDefs;
