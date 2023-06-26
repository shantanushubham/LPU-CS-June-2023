const { model, Schema } = require("mongoose");
const { encryptPassword, checkPassword } = require("../bcrypt");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  const user = this;
  if (user.modifiedPaths().includes("password")) {
    user.password = await encryptPassword(user.password);
  }
  next();
});

UserSchema.statics.findByEmailAndPasswordForAuth = 
async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Login Failed! Please check email.");
  }
  const encryptedPassword = user.password;
  const isMatch = await 
    checkPassword(password, encryptedPassword);
  if (!isMatch) {
    throw new Error("Login Failed! Wrong Password.");
  }
  console.info("Login Successful.");
  return user;
};

const User = model("User", UserSchema);

module.exports = User;
