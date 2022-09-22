const { gql } = require("apollo-server-express");

// _id:ID - took this out of typeDef since we have employee IDs

const typeDefs = gql`
  type User1 {
    name: String
    email: String
    employeeID: Int
    zoomMeetingID: String
    manager: String
    organization: String
    department: String
    team: String
    title: String
    startDate: String
    salary: Int
    profileBio: String
    rank: Int
    password: String
  }

  type Sector2 {
    name: String
    description: String
    Employees: [User1]
  }

  type Auth {
    token: ID!
    user: User1
  }

  type Query {
    me: User1
    departments: [Sector2]
    employee(employeeID: Int): User1
    deptEmployees(Sector2: String, name: String): [User1]
    allEmployees: [User1]
  }

  type Mutation {
    addUser(
      name: String!
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
    ): User1

    updateUser(
      name: String!
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
    ): User1

    login(email: String!, password: String!): Auth

    deleteUser(
      name: String!
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
    ): User1
  }
`;

module.exports = typeDefs;
