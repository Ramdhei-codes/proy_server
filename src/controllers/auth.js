const jwt = require("../services/jwt");
const moment = require("moment");
const user = require("../models/user.model");

const checkIfTokenExpired = (token) => {
  const { expiredDate } = jwt.decodedToken(token);
  const currentDate = moment().unix();
  return currentDate > expiredDate;
};

const refreshAccessToken = (req, res) => {
  const { refreshToken } = req.body;
  const tokenExpired = checkIfTokenExpired(refreshToken);
  console.log(tokenExpired);

  const { id } = jwt.decodedToken(refreshToken);

  if (tokenExpired) {
    res.status(400).send({ message: "El token ha caducado" });
  } else {
    user.findOne({ _id: id }, (err, userStored) => {
      if (err) {
        res.status(500).send({ message: "Error del servidor" });
      }

      if (!userStored) {
        res.status(400).send({ message: "Usuario no encontrado" });
      } else {
        res.status(200).send({
          accessToken: jwt.createAccessWithToken(userStored),
          refreshToken: refreshToken,
        });
      }
    });
  }
};

module.exports = { refreshAccessToken };
