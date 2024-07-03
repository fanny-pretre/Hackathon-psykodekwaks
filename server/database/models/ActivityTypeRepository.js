const AbstractRepository = require("./AbstractRepository");

class ActivityTypeRepository extends AbstractRepository {
  constructor() {
    super({ table: "activity_type" });
  }

  async create(activityType) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name) values (?)`,
      [activityType.name]
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

  async update(id, updatedActivityType) {
    const query = `
    update ${this.table} set ? where id = ?`;
    const [result] = await this.database.query(query, [
      updatedActivityType,
      id,
    ]);
    return result.affectedRows > 0;
  }

  async delete(id) {
    const query = `
    delete from ${this.table} where id = ?`;
    const [result] = await this.database.query(query, [id]);
    return result.affectedRows > 0;
  }
}

module.exports = ActivityTypeRepository;
