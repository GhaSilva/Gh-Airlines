const { Router } = require("express");
const VoosController = require("../controllers/VoosController");

const router = Router();


router.get('/voos', VoosController.pegaTodosOsVoos)
router.get('/voos/:id', VoosController.pegaUmVoo)
router.post('/voos', VoosController.criaVoo)
router.get('/voosdisponiveis', VoosController.pegaVoosDisponiveis)

//router.put('/clientes/:id', ClienteController.atualizaCliente)
router.delete('/voos/:id', VoosController.apagaVoo)


module.exports = router