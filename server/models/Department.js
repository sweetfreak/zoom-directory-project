const { Schema, model } = require("mongoose");
const userSchema = require("./User");

const deptSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: false,
    },
    employee: [userSchema],
  },
);

const Dept = model("Dept", deptSchema);

module.exports = Dept;
