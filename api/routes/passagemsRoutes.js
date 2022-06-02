const { Router } = require("express");
const PassagemController = require("../controllers/PassagemController");

const router = Router();

router.get('/passagens', PassagemController.pegaTodasAsPassagens)
router.get('/passagenscompradas', PassagemController.pegaPassagensCompradas)
router.get('/passagensporcliente/:comprador', PassagemController.pegaPassagensPorCliente)
router.get('/passagensnaocompradas', PassagemController.pegaPassagensNaoCompradas)
router.get('/passagens/:id', PassagemController.pegaUmaPassagem)
router.get('/passagensporvoo/:voo_id', PassagemController.pegaPassagensPorVoo)
router.get('/passagensdisponivelporvoo/:voo_id', PassagemController.pegaPassagensDisponiveisPorVoo)
router.get('/detalharpassagem/:id', PassagemController.detalharPassagem)

module.exports = router