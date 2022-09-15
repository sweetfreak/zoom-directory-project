const {gql} = require('apollo-server-express');
 

// _id:ID - took this out of typeDef since we have employee IDs

const typeDefs = gql`
type User {
   
    firstName: String
    lastName: String
    employeeUsername: String
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

}

type Auth {
    token ID!
    user: User
}

type Query {
    me: User
    
}

`