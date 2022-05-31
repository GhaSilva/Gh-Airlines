const { Router } = require("express");
const PassagemController = require("../controllers/PassagemController");

const router = Router();


router.get('/passagens', PassagemController.pegaTodasAsPassagens)
router.get('/passagenscompradas', PassagemController.pegaPassagensCompradas)
router.get('/passagensporcliente/:comprador', PassagemController.pegaPassagensPorCliente)
router.get('/passagensnaocompradas', PassagemController.pegaPassagensNaoCompradas)
router.get('/passagens/:id', PassagemController.pegaUmaPassagem)
//router.put('/clientes/:id', ClienteController.atualizaCliente)
router.delete('/passagens/:id', PassagemController.apagaPassagem)

module.exports = router