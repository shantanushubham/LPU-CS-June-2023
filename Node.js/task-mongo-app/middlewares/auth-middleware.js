const { verifyToken } = require("../jwt");
const userRepository = require("../repositories/user-repository");

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization.substring(7);
  const { status, payload } = verifyToken(token);
  const errorData = {
    message:
      "Please use valid token. To get a valid token, please authenticate.",
  };
  if (status) {
    const { _id } = payload;
    const user = await userRepository.getUserById(_id);
    if (!user) {
      return res.status(403).send(errorData);
    } else {
      req.user = user;
      req.token = token;
      next();
    }
  } else {
    return res.status(403).send(errorData);
  }
};

module.exports = { authMiddleware };
