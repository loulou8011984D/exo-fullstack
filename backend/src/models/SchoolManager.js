const AbstractManager = require("./AbstractManager");

class SchoolManager extends AbstractManager {
  constructor() {
    super({ table: "school" });
  }

  insert(school) {
    return this.connection.query(
      `insert into ${this.table} (name, capacity, country) values (???)`,
      [school.name, school.capacity, school.country]
    );
  }

  update(school) {
    return this.connection.query(
      `update ${this.table} set name = ?, set capacity = ?, set country = ? where id = ?`,
      [school.name, school.capacity, school.country, school.id]
    );
  }
}

module.exports = SchoolManager;
