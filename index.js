const mongoose = require("mongoose");
const app = require("./app");
const PORT_SERVER = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");

mongoose.connect(
  `mongodb://${IP_SERVER}:${PORT_DB}/project_db`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("Successfully connected to DB");
      app.listen(PORT_SERVER, () => {
        console.log(`http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}`);
      });
    }
  }
);
