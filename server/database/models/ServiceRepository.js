const AbstractRepository = require("./AbstractRepository");

class ServiceRepository extends AbstractRepository {
  constructor() {
    super({ table: "service" });
  }

  async create(service) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name) values (?)`,
      [service.name]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async update(id, service) {

    const [result] = await this.database.query(
      `update ${this.table} set name = ? where id = ?`,

      [service.name, id]
    );

    console.info(result.affectedRows);
    return result.affectedRows;
  }

  async delete(id) {
    const query = `
    delete from ${this.table} where id = ?`;
    const [result] = await this.database.query(query, [id]);
    return result.affectedRows > 0;
  }
}

module.exports = ServiceRepository;
