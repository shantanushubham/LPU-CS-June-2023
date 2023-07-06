const InputValidationException = require("../exceptions/InputValidationException");
const userService = require("../service/user-service");

const addNewUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, type, dob, joiningDate } =
      req.body;
    let user = {
      firstName,
      lastName,
      email,
      password,
      type,
      dob,
      joiningDate,
    };
    user = await userService.addNewUser(user);
    return res.status(200).send(user);
  } catch (err) {
    console.error(err);
    return res
      .status(err instanceof InputValidationException ? 400 : 500)
      .send({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await userService.loginUser({ email, password });
    return res.status(200).send(data);
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: err.message });
  }
};

module.exports = { addNewUser, loginUser };
