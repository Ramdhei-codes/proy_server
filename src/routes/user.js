const express = require("express");
const UserController = require("../controllers/user");

const api = express.Router();

api.post("/signup", UserController.signUp);
<<<<<<< HEAD
api.post("/signin", UserController.signIn);
=======
>>>>>>> bbfaf61529f44d22fae48677c8ba6adda1343581

module.exports = api;
