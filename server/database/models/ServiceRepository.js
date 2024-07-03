const AbstractRepository = require("./AbstractRepository");

class ServiceRepository extends AbstractRepository {
  constructor() {
    super({ table: "service" });
  }

  async create(service) {
    const [result] = await this.database.query(
      `insert into ${this.table} (service) values (?)`,
      [service.services]
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

  async update(id, updatedService) {
    const query = `
    update ${this.table} set ? where id = ?`;
    const [result] = await this.database.query(query, [updatedService, id]);
    return result.affectedRows > 0;
  }

  async delete(id) {
    const query = `
    delete from ${this.table} where id = ?`;
    const [result] = await this.database.query(query, [id]);
    return result.affectedRows > 0;
  }
}

module.exports = ServiceRepository;
