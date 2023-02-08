const mongoose = requiew("mongoose");

const UserSchema = new mongoose.schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 25,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unipue: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 50,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: String,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: "",
    },
    desc: {
      type: String,
      max: 70,
    },
    city: {
      type: String,
      max: 50,
    },
  },

  { timestamps: true }
);
