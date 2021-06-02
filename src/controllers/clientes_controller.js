const ClienteRepositorio = require("../servicos/cliente_repositorio")
const Cliente = require("../entidades/cliente")

module.exports = {
  index: async (req, res) => {
    res.status(200).send(await ClienteRepositorio.buscar());
  },
  criar: async (req, res) => {
    let cliente = await ClienteRepositorio.inserir(req.body)
    res.status(200).send(cliente);
  },
  update: async (req, res) => {
    let cliente = await ClienteRepositorio.atualizar(req.params.id, req.body)
    res.status(200).send(cliente);
  },
  delete: async (req, res) => {
    await ClienteRepositorio.apagar(req.params.id)
    res.status(204).send({});
  }
}