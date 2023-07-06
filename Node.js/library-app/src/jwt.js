const jwt = require("jsonwebtoken");

const LPU_SIGNATURE = "LPU-Signature1";

const generateToken = ({ _id, type }) => {
  const token = jwt.sign({ _id, type }, LPU_SIGNATURE);
  return token;
};

const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, LPU_SIGNATURE);
    return { status: true, payload };
  } catch (err) {
    console.error(err);
    return { status: false, payload: undefined };
  }
};

module.exports = { generateToken, verifyToken };
