module.exports = {
  criar : (cliente = {}) => {
    return {
      id: cliente.id,
      nome: cliente.nome,
      cpf: cliente.cpf,
      telefone: cliente.telefone,
      email: cliente.email
    }
  }
}