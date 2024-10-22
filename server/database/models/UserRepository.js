const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const [result] = await this.database.query(
      `insert into ${this.table} (email, password, firstname, lastname, role_id, service_id) values (?, ?, ?, ?, ?, ?)`,
      [
        user.email,
        user.password,
        user.firstname,
        user.lastname,
        user.role_id,
        user.service_id,
      ]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT user.*, service.name s_name, role.name r_name
      FROM ${this.table} AS user
      JOIN service ON user.service_id = service.id
      JOIN role ON user.role_id = role.id
      WHERE user.id = ?`,
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

module.exports = UserRepository;
