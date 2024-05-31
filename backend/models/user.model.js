import mongoose from "mongoose";


// creating user schema

const userSchema = new mongoose.Schema(
  {
    // fields for users

    username: {
      type: String,
      required: true,
      unique: true,
    },


    fullName: {
      type: String,
      required: true,
    },


    password: {
      type: String,
      required: true,
      minLength: 6,
    },


    email: {
      type: String,
      required: true,
      unique: true,
    },


    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],


    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],


    profileImg: {
      type: String,
      default: "",
    },


    coverImg: {
      type: String,
      default: "",
    },


    bio: {
        type: String,
        default: "",
    },


    link: {
        type: String,
        default: "",
    }
  },
  { timestamps: true }
);



// creating user model

const User = mongoose.model("User", userSchema);



// exporting user model

export default User;
