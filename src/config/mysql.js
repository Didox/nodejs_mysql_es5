const mysql = require('mysql');
const util = require('util');
const db = {};
db.exec = async (sql, values) => {
  const conn = mysql.createConnection("mysql://root:root@localhost:3306/clientes_typeorm");
  const query = util.promisify(conn.query).bind(conn);
  try {
    const rows = await query(sql, values);
    return rows;
  }
  catch(e){
    console.log(e)
    return []
  } finally {
    conn.end();
  }
};

module.exports = db