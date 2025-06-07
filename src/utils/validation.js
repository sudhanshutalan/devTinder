const validator = require("validator");

// custom validation function to validate the signup api
const validateSignupData = (req) => {
  //extracting the data from req.body
  const { firstName, lastName, emailID, password, gender, age } = req.body;

  // if firstname or lasname is not valid
  if (!firstName || !lastName) {
    throw new Error("Name is not valid");

    // if entered email id is not valid
  } else if (!validator.isEmail(emailID)) {
    throw new Error(`Email entered ${emailID} is invalid!`);

    //if password is weak
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Your password is weak! Choose strong password");

    // validating gender
  } else if (gender !== "male" && gender !== "female" && gender !== "others") {
    throw new Error(`gender ${gender} is not valid!`);

    // validating age(must be 18 or older)
  } else if (age < 18) {
    throw new Error("Minors are not allowed to register");
  }
};

module.exports = {
  validateSignupData,
};
