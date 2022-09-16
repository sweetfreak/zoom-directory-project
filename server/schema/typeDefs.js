const { gql } = require("apollo-server-express");

// _id:ID - took this out of typeDef since we have employee IDs

const typeDefs = gql`
type User {
   
    firstName: String
    lastName: String
    email: String
    employeeID: String
    zoomMeetingID: Int
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

type Auth {
    token ID!
    user: User
}

type Query {
    me: User
    Departments: [Department]
    employee(employeeID: ID!): employee
    deptEmployee(department: name, name: String): [User]
}

type Department {
    name: String
    description: String
    Employees: [User] 
}

type Mutation {
    addUser(firstName: String!
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
        password: String!)
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
    )
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
    )
}
`;

module.exports = typeDefs;
