const database = require("../models");

let assentos = 5;
class ClienteController {
  //listar todos os clientes
  static async pegaTodosOsClientes(req, res) {
    try {
      const todosOsClientes = await database.Clientes.findAll();
      return res.status(200).json(todosOsClientes);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  }

  //Lista um cliente
  static async pegaUmCliente(req, res) {
    const { id } = await req.params;
    try {
      const umaPessoa = await database.Clientes.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(umaPessoa);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  }

  //Lista cliente pelo cpf
  static async pegaUmClientePorCpf(req, res) {
    const { cpf } = await req.params;
    try {
      const umCliente = await database.Clientes.findOne({
        where: { cpf: Number(cpf) },
      });
      return res.status(200).json(umCliente);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  }

  //Lista passagem por id do cliente
  static async pegaPassagemPorCliente(req, res) {
    const { id } = await req.params;
    try {
      const passagens = await database.Passagems.findAll({
        where: { comprador: Number(id) },
      });
      return res.status(200).json(passagens);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  }

  //Compra passagem
  static async compraPassagem(req, res) {
    const { cpf, id } = await req.params;
    try {
      const umCliente = await database.Clientes.findOne({
        where: { cpf: Number(cpf) },
      });
      let novasInfos = { comprador: umCliente.id, comprado: true };
      const passagem = await database.Passagems.findOne({
        where: { id: Number(id) },
      });

      if (passagem.comprado == true) {
        return res.status(401).json({ message: "Passagem não disponível" });
      }

      await database.Passagems.update(novasInfos, {
        where: { id: Number(id) },
      });
      await database.sequelize.query(
        `UPDATE passagems SET data_da_compra = now() WHERE id = ${id}`
      );
      await database.sequelize.query(
        `UPDATE voos SET quantidade_de_assentos = ${(assentos -= 1)} WHERE id = ${
          passagem.voo_id
        }`
      );

      const PassagemAtualizada = await database.Passagems.findOne({
        where: { id: Number(id) },
      });

      return res.status(200).json(PassagemAtualizada);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  }

  //Criar cliente
  static async criaCliente(req, res) {
    const novoCliente = req.body;
    try {
      const novoClienteCriado = await database.Clientes.create(novoCliente);
      return res.status(201).json(novoClienteCriado);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  }

  //Atualiza cliente
  static async atualizaCliente(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.Clientes.update(novasInfos, { where: { id: Number(id) } });
      const clienteAtualizado = await database.Clientes.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(clienteAtualizado);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  }

  //Apaga cliente
  static async apagaCliente(req, res) {
    const { id } = req.params;
    try {
      await database.Passagems.destroy({
        where: { comprador: Number(id) },
      });
      await database.Clientes.destroy({ where: { id: Number(id) } });

      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (error) {
      return res.status(401).json(error.message);
    }
  }
}
module.exports = ClienteController;
