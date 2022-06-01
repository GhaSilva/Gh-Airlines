const database = require("../models");
const { QueryTypes } = require('sequelize');

class VoosController {

  //Lista todos os Voos
  static async pegaTodosOsVoos(req, res) {
    try {
      const todosOsVoos = await database.Voos.findAll();
      return res.status(200).json(todosOsVoos);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  }

  //Pega voos com passagens não compradas
  static async pegaVoosDisponiveis(req, res) {
    try {
      const voosDisponiveis = await database.sequelize.query("SELECT * FROM `voos` where quantidade_de_assentos >= 1", { type: QueryTypes.SELECT });
      return res.status(200).json(voosDisponiveis);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  }

  //listar um voo só
  static async pegaUmVoo(req, res) {
    const { id } = await req.params;
    try {
      const umVoo = await database.Voos.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(umVoo);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  }

  //criar um Voo
  static async criaVoo(req, res) {
    const novoVoo = req.body;
    try {
      const novoVooCriado = await database.Voos.create(novoVoo);
      try {
        let ultimoId = await database.Voos.max("id");
        let tudo = {};
        for (let i = 1; i <= 5; i++) {
          const data_da_compra = null;
          const comprado = false;
          const voo_id = Number(ultimoId);
          const cadeira = Number(i);
          const comprador = null;
          tudo = { data_da_compra, comprado, voo_id, cadeira, comprador };
          await database.Passagems.create(tudo);
        }
      } catch (error) {
        return res.status(401).json(error.message);
      }
      return res.status(201).json(novoVooCriado);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  }

  //atualizar um voo
  static async atualizaVoo(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.Voos.update(novasInfos, { where: { id: Number(id) } });
      const VooAtualizado = await database.Voos.findOne({
        where: { id: Number(id) },
      });
      return res.status(201).json(VooAtualizado);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  }

  //apaga Voo
  static async apagaVoo(req, res) {
    const { id } = req.params;
    try {
      await database.Voos.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (error) {
      return res.status(401).json(error.message);
    }
  }
}

module.exports = VoosController;
