const bodyParser = require("body-parser");
const clientes = require("../routes/clientesRoutes");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(clientes);
};
