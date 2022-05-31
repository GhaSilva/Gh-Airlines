const database = require("../models");

class ClienteController {
  static async pegaTodosOsClientes(req, res) {
    try {
      const todasOsClientes = await database.Clientes.findAll();
      return res.status(200).json(todasOsClientes);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  }
}
module.exports = ClienteController;
