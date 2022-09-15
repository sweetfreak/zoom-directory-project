const {schema, model, Schema} = require ('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            unique: true,
            trim: true
          },
          lastName: {
            type: String,
            required: true,
            unique: true,
            trim: true
          },
          email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
          },
          password: {
            type: String,
            required: true,
            minlength: 5
          },
          employeeUsername: {
            type: String,
            required:true,
            //make it be the first letter of firstName + lastName
            //default:
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
            trim: true
          },
          //as this would be auto-generated, is this correct?
          employeeID: {
            type: String,
            required: true,
          },
          zoomMeetingID: {
            type: Number,
            required: false,
            minlength: 9
          },
          manager: {
            type: String,
            required: false,
          },
          department: {
            type: String,
            required: true
          },
          team: {
            type: String,
            required: false
          },
          title: {
            type: String,
            required: true
          },
          salary: {
            type: Number,
            required: false
          },
          profileBio: {
            type: String,
            required: false,
            maxlength: 500
          },
          profilePic: {
            type: String,
            requied: false
          },
          //a favorite employees button? if we have time!
          //starredEmployees { ty}
    }
)