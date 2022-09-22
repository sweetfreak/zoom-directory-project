const { AuthenticationError } = require("apollo-server-express");
const { User1, Sector2 } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        //using employeeID and not an ID created by the system. maybe it should be _id though?
        const userData = await User1.findOne({
          employeeID: context.user.employeeID,
        }).select("-__v -password");
        //if starred employees, add here
        return userData;
      }
      throw new AuthenticationError("no user logged in");
    },
    employee: async (parent, { employeeID }) => {
      return User1.findOne({ employeeID }).select("-__v -password");
    },
    //does department have to be a schema type and have its own model?
    departments: async () => {
      return await Sector2.find();
    },
    deptEmployees: async (parent, { department }) => {
      const params = {};

      if (department) {
        params.deparments = department;
      }

      return await deptEmployees.find(params).populate("deptEmployees");
    },
    allEmployees: async () => {
      return await User1.find();
    },
    
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User1.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User1.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    deleteUser: async (parent, args, context) => {
      if (context.user) {
        const updateUser = await User1.findOneAndUpdate(
          { employeeID: context.user.employeeID },
          { $pull: { deptEmployees: { employeeID: args.employeeID } } },
          { new: true }
        );
        return updateUser;
      }
      throw new AuthenticationError(
        "You dont have the authority to make these changes"
      );
    },
  },
};

module.exports = resolvers;
