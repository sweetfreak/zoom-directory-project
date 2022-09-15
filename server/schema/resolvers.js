const {AuthenticationError} = require('apollo-server-express');
const {User} = require('../models');
const {signToken} = require('../utils/auth');

const resolvers = {
    Query: {
        me: async(parent, args, context) => {
            if (context.user) {
                //using employeeID and not an ID created by the system. maybe it should be _id though?
                const userData = await User.findOne({employeeID: context.user.employeeID})
                    .select('-__v -password');
                    //if starred employees, add here
                    return userData;
            }
            throw new AuthenticationError('no user logged in');
        },
        employee: async (parent, {employeeUsername}) => {
            return User.findOne({ username })
        .select('-__v -password')
        },
        //does department have to be a schema type and have its own model?
        departments: async (parent, {department}) => {
            const params = department ? {department} : {};
            return User.find(params)
        }
    }
}