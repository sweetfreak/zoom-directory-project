const { Schema, model } = require("mongoose");
const User1 = require("./User");

const deptSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const Sector2 = model("Sector2", deptSchema);

module.exports = Sector2;
