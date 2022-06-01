const { Router } = require("express");
const ClienteController = require("../controllers/ClienteController");

const router = Router();

router.get('/clientes', ClienteController.pegaTodosOsClientes)
router.get('/clientes/:cpf', ClienteController.pegaUmClientePorCpf)
router.get('/clientes/:id/passagens', ClienteController.pegaPassagemPorCliente)
router.get('/clientes/:cpf/comprarpassagem/:id', ClienteController.compraPassagem)
router.post('/clientes', ClienteController.criaCliente)
router.put('/clientes/:id', ClienteController.atualizaCliente)
router.delete('/clientes/:id', ClienteController.apagaCliente)

module.exports = router