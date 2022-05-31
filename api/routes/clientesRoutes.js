const { Router } = require("express");
const ClienteController = require("../controllers/ClienteController");

const router = Router();


router.get('/clientes', ClienteController.pegaTodosOsClientes)

module.exports = router