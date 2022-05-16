const bcrypt = require("bcrypt-nodejs");
const User = require("../models/user.model");

function signUp(req, res) {
  const user = new User();
  const { name, lastname, email, password, repeatPassword } = req.body;

  user.name = name;
  user.lastname = lastname;
  user.email = email;

  user.role = "admin";
  user.active = true;

  if (!password || !repeatPassword) {
    res.status(400).send({ message: "Las contraseñas son obligatorias" });
  } else {
    if (password !== repeatPassword) {
      res.status(400).send({ message: "Las contraseñas no coinciden" });
    } else {
      bcrypt.hash(password, null, null, (err, hash) => {
        if (err) {
          res.status(500).send({ message: "Error encriptando" });
        } else {
          user.password = hash;
          user.save((err, userStored) => {
            if (err) {
              res.status(500).send({ message: "El usuario ya existe" });
            } else {
              if (!userStored) {
                res.status(404).send({ message: "Error al crear el usuario" });
              } else {
                res.status(200).send({ message: userStored });
              }
            }
          });
        }
      });
    }
  }
}

module.exports = { signUp };
