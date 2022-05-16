const { default: mongoose } = require("mongoose");

const user = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
  },
  lastname: {
    type: String,
    required: true,
    min: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  },
  active: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("userCollection", user);
