const AbstractRepository = require("./AbstractRepository");

class ActivityRepository extends AbstractRepository {
  constructor() {
    super({ table: "activity" });
  }

  async create(activity) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, description, date, time, image, is_corporate, user_id, activity_type_id) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        activity.name,
        activity.description,
        activity.date,
        activity.time,
        activity.image,
        activity.is_corporate,
        activity.user_id,
        activity.activity_type_id,
      ]
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

  async update(id, updatedActivity) {
    const query = `
    update ${this.table} set ? where id = ?`;
    const [result] = await this.database.query(query, [updatedActivity, id]);
    return result.affectedRows > 0;
  }

  async delete(id) {
    const query = `
    delete from ${this.table} where id = ?`;
    const [result] = await this.database.query(query, [id]);
    return result.affectedRows > 0;
  }
}

module.exports = ActivityRepository;
