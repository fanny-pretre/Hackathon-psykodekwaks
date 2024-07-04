const AbstractRepository = require("./AbstractRepository");

class ActivityRepository extends AbstractRepository {
  constructor() {
    super({ table: "activity" });
  }

  async create(activity) {
    const [result] = await this.database.query(
      `insert into ${this.table} (title, description, date, time, image, place, is_corporate, user_id, activity_type_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        activity.title,
        activity.description,
        activity.date,
        activity.time,
        activity.image,
        activity.place,
        activity.is_corporate,
        activity.user_id,
        activity.activity_type_id,
      ]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select activity.*, activity_type.name, activity_type.id
      from ${this.table} 
      inner join activity_type on activity_type.id=activity.activity_type_id
      where activity.id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `select activity.*, activity_type.name, activity_type.id
      from ${this.table} 
      inner join activity_type on activity_type.id=activity.activity_type_id`
    );

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
