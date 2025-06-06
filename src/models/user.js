const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4, // setting a minimum length
      maxLength: 50, // setting a maximum
    },
    LastName: {
      type: String,
    },
    emailID: {
      type: String,
      required: true, // make fields mandotary
      lowercase: true, // make all letters in lowercase
      trim: true, // remove whitespace from front and rear
      unique: true, // make the field unique prevents duplicate entry
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid Email address " + value);
        }
      },
    },
    password: {
      type: String,
    },
    age: {
      type: Number,
      min: 18, // setting up a minimum required value
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    skills: {
      type: [String], // Array of strings to hold multiple skills
      default: [], // Default value is an empty array
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
