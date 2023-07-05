const { model, Schema } = require("mongoose");
const { isEmail } = require("validator");

const UserSchema = new Schema(
  {
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true, required: true },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
      validate: {
        validator(email) {
          return isEmail(email);
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
          if (
            pass.includes(" ") ||
            pass.includes("\n") ||
            pass.includes("\t")
          ) {
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
    type: {
      type: String,
      enum: ["STUDENT", "LIBRARIAN"],
      default: "STUDENT",
    },
    dob: {
      type: Date,
      required: true,
      validate: {
        validator(date) {
          if (date >= new Date()) {
            throw new Error(`DOB must not be in the future`);
          }
          return true;
        },
      },
    },
    joiningDate: {
      type: Date,
      required: true,
      validate: {
        validator(date) {
          if (date > new Date()) {
            throw new Error(`Joining Date must not be in the future`);
          }
          return true;
        },
      },
    },
    tokens: {
      type: [{ token: String }],
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", UserSchema);

module.exports = User;
