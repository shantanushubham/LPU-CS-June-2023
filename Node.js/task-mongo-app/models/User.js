const { model, Schema } = require("mongoose");
const { encryptPassword, checkPassword } = require("../bcrypt");
const { isEmail } = require("validator");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String, // "xYz123"
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator(e) {
        return isEmail(e);
      },
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
    validate: {
      validator(pass) {
        /**
         * 1. Min Length must be 8 --> ✅
         * 2. Password must not contain spaces, newlines and tabs. --> ✅
         * 3. It must not contain the word "password" --> ✅
         */
        if (pass.includes(" ") || pass.includes("\n") || pass.includes("\t")) {
          throw new Error(
            "Password must not contain space/tab/newline character."
          );
        }
        if (pass.toLowerCase().includes("password")) {
          throw new Error("Password must not contain `password`");
        }
        return true;
      },
    },
  },
  age: {
    type: Number,
    required: true,
    validate: {
      validator(a) {
        if (a < 0) {
          throw new Error("Age must be +ve");
        }
        return true;
      },
    },
  },
});

UserSchema.pre("save", async function (next) {
  const user = this;
  if (user.modifiedPaths().includes("password")) {
    user.password = await encryptPassword(user.password);
  }
  next();
});

UserSchema.statics.findByEmailAndPasswordForAuth = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Login Failed! Please check email.");
  }
  const encryptedPassword = user.password;
  const isMatch = await checkPassword(password, encryptedPassword);
  if (!isMatch) {
    throw new Error("Login Failed! Wrong Password.");
  }
  console.info("Login Successful.");
  return user;
};

const User = model("User", UserSchema);

module.exports = User;
