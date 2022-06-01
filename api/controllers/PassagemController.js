const database = require("../models");


class PassagemController {
  //Lista todas as passagens
  static async pegaTodasAsPassagens(req, res) {
    try {
      const todasAsPassagens = await database.Passagems.findAll();
      return res.status(200).json(todasAsPassagens);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  //Lista uma passagem por id
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

  //Lista passagens compradas
  static async pegaPassagensCompradas(req, res) {
        try {
          const passagensCompradas = await database.Passagems.findAll({
            where: { comprado: Number(1) },
          });
          return res.status(200).json(passagensCompradas);
        } catch (error) {
          return res.status(401).json(error.message);
        }
  }

  //Lista passagens de um voo por id
  static async pegaPassagensPorVoo(req, res) {
        const { voo_id } = await req.params;
        try {
          const passagensPorVoo = await database.Passagems.findAll({
            where: { voo_id: Number(voo_id) },
          });
          return res.status(200).json(passagensPorVoo);
        } catch (error) {
          return res.status(401).json(error.message);
        }
  }

  //Lista passagens disponíveis por voo
  static async pegaPassagensDisponiveisPorVoo(req, res) {
        const { voo_id } = await req.params;
        try {
          const passagensDisponiveis = await database.Passagems.findAll({
            where: { voo_id: Number(voo_id), comprado:false },
          });
          return res.status(200).json(passagensDisponiveis);
        } catch (error) {
          return res.status(401).json(error.message);
        }
  }

  //Detalha uma passagem mostrando seus dados e os do voo
  static async detalharPassagem(req, res) {
        const { id } = await req.params;
        try {
          //const passagem = await database.sequelize.query(`SELECT * FROM voos,passagems where passagems.id = ${id} limit 1`)
          const passagem = await database.sequelize.query(`SELECT passagems.id, horario_de_saida, horario_de_chegada, aeroporto_de_origem, aeroporto_de_destino, quantidade_de_assentos, preco, data_da_compra, comprado, voo_id, cadeira, comprador  FROM voos inner join passagems on voos.id = passagems.voo_id where passagems.id = ${id} `)

          return res.status(200).json(passagem[0]);
        } catch (error) {
          return res.status(401).json(error.message);
        }
  }

  //Lista todas as passagens não compradas
  static async pegaPassagensNaoCompradas(req, res) {

        try {
          const passagensNaoCompradas = await database.Passagems.findAll({
            where: { comprado: Number(0) },
          });
          return res.status(200).json(passagensNaoCompradas);
        } catch (error) {
          return res.status(401).json(error.message);
        }
  }

  //Lista passagens compradas por um cliente
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

  //Apaga passagem
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
