const { Router } = require("express");
const PassagemController = require("../controllers/PassagemController");

const router = Router();


router.get('/passagens', PassagemController.pegaTodasAsPassagens)
router.get('/passagenscompradas', PassagemController.pegaPassagensCompradas)
router.get('/passagensporcliente/:comprado', PassagemController.pegaPassagensPorCliente)
router.get('/passagensnaocompradas', PassagemController.pegaPassagensNaoCompradas)
router.get('/passagens/:id', PassagemController.pegaUmaPassagem)
router.get('/passagensporvoo/:voo_id', PassagemController.pegaPassagensPorVoo)
router.get('/passagensdisponivelporvoo/:voo_id', PassagemController.pegaPassagensDisponiveisPorVoo)
router.get('/detalharpassagem/:id', PassagemController.detalharPassagem)
//router.put('/clientes/:id', ClienteController.atualizaCliente)
router.delete('/passagens/:id', PassagemController.apagaPassagem)

module.exports = router