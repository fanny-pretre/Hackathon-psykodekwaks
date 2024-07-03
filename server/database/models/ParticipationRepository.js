const AbstractRepository = require("./AbstractRepository");

class ParticipationRepository extends AbstractRepository {
  constructor() {
    super({ table: "participation" });
  }

  async create(participation) {
    const [result] = await this.database.query(
      `insert into ${this.table} (user_id, activity_type_id) values (?, ?)`,
      [participation.user_id, participation.participation_activity_id]
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

  async update(id, updatedparticipation) {
    const query = `
    update ${this.table} set ? where id = ?`;
    const [result] = await this.database.query(query, [
      updatedparticipation,
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

module.exports = ParticipationRepository;
