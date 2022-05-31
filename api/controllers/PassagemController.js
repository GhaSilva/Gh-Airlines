const database = require("../models");

class PassagemController {
  //listar todas as passagens
  static async pegaTodasAsPassagens(req, res) {
    try {
      const todasAsPassagens = await database.Passagems.findAll();
      return res.status(200).json(todasAsPassagens);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

    //listar uma passagem
    static async pegaUmaPassagem(req, res) {
        const { id } = await req.params;
        try {
          const umaPassagem = await database.Passagems.findOne({
            where: { id: Number(id) },
          });
          return res.status(200).json(umaPassagem);
        } catch (error) {
          return res.status(401).json(error.message);
        }
      }

          //listar uma passagem
    static async pegaPassagensCompradas(req, res) {
        const { comprado } = await req.params;
        try {
          const passagensCompradas = await database.Passagems.findAll({
            where: { comprado: Number(1) },
          });
          return res.status(200).json(passagensCompradas);
        } catch (error) {
          return res.status(401).json(error.message);
        }
      }
      static async pegaPassagensNaoCompradas(req, res) {
        const { comprado } = await req.params;
        try {
          const passagensNaoCompradas = await database.Passagems.findAll({
            where: { comprado: Number(0) },
          });
          return res.status(200).json(passagensNaoCompradas);
        } catch (error) {
          return res.status(401).json(error.message);
        }
      }
      static async pegaPassagensPorCliente(req, res) {
        const { comprador } = await req.params;
        try {
          const passagensPorCliente = await database.Passagems.findAll({
            where: { comprador: Number(comprador)  },
          });
          return res.status(200).json(passagensPorCliente);
        } catch (error) {
          return res.status(401).json(error.message);
        }
      }

      static async apagaPassagem(req, res){
        const { id } = req.params;
        try{
            await database.Passagems.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ mensagem:`id ${id} deletado`})
        }
        catch(error){
            return res.status(401).json(error.message);
        }
      }
}

module.exports = PassagemController;
