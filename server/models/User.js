const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt");
//here we created user schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      default: "corgi123",
    },
    startDate: {
      type: Date,
      required: true,
      default: Date.now,
      //need to adjust the dateFormat from 21.6 to work for us.
      //get: timestamp => dateFormat(timestamp)
    },
    organization: {
      type: String,
      //could make required: true if we add multiple orgs
      required: false,
      trim: true,
    },
    //as this would be auto-generated, is this correct?
    employeeID: {
      type: String,
      required: true,
    },
    zoomMeetingID: {
      type: Number,
      required: false,
      minlength: 9,
    },
    manager: {
      type: String,
      required: false,
    },
    department: {
      type: String,
      required: false,
    },
    team: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: false,
    },
    profileBio: {
      type: String,
      required: false,
      maxlength: 500,
    },
    phoneNumber: {
      type: String,
      required: false,
      //match: ,
    },
    profilePic: {
      type: String,
      requied: false,
    },
    rank: {
      type: Number,
      default: 1,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User1 = model("User1", userSchema);

(module.exports = User1), userSchema;
