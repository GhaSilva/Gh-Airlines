const bodyParser = require("body-parser");
const clientes = require("../routes/clientesRoutes");
const voos = require("../routes/voosRoutes");
const passagens = require("../routes/passagemsRoutes");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(clientes);
  app.use(voos);
  app.use(passagens);
};
