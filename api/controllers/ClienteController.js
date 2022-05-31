const database = require("../models");

class ClienteController {
  //listar todos os clientes
  static async pegaTodosOsClientes(req, res) {
    try {
      const todasOsClientes = await database.Clientes.findAll();
      return res.status(200).json(todasOsClientes);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  }

  //listar um cliente só
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

  //criar um cliente
  static async criaCliente(req, res) {
    const novoCliente = req.body;
    try {
      const novoClienteCriado = await database.Clientes.create(novoCliente);
      return res.status(201).json(novoClienteCriado);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  }

  //atualizar um cliente
  static async atualizaCliente(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.Clientes.update(novasInfos, { where: { id: Number(id) } });
      const clienteAtualizado = await database.Clientes.findOne({
        where: { id: Number(id) },
      });
      return res.status(201).json(clienteAtualizado);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  }

  static async apagaCliente(req, res){
    const { id } = req.params;
    try{
        await database.Clientes.destroy({ where: { id: Number(id) } })
        return res.status(200).json({ mensagem:`id ${id} deletado`})
    }
    catch(error){
        return res.status(401).json(error.message);
    }
  }
}
module.exports = ClienteController;
