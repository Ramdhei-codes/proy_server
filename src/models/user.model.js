const { default: mongoose } = require("mongoose");

const user = mongoose.Schema({
  name_user: {
    type: String,
    require: true,
    min: 3,
  },
  last_name: {
    type: String,
    require: true,
    min: 3,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: Boolean,
    require: true,
  },
  avatar: {
    type: String,
    require: false,
  },
});

module.exports = mongoose.model("userCollection", user);
