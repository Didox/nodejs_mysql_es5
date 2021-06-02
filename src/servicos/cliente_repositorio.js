const mysql = require('../config/mysql');

module.exports = {
  inserir: async cliente => {
    await mysql.exec("insert into clientes(nome, email, cpf, telefone)values(?,?,?,?)", [
      cliente.nome,
      cliente.email,
      cliente.cpf,
      cliente.telefone
    ]);
  },
  atualizar: async (id, cliente) => {
    await mysql.exec("update clientes set nome=?, email=?, cpf=?, telefone=? where id=?", [
      cliente.nome,
      cliente.email,
      cliente.cpf,
      cliente.telefone,
      id
    ]);
  },
  buscar: async () => {
    return await mysql.exec("select * from clientes");
  },
  apagar: async id => {
    await mysql.exec("delete from clientes where id=?", [id]);
  }
}