/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("medical", function (table) {
      table.increments("id").primary();
      table.boolean("status");
      table.date("checkup due by");
      table.boolean("immunization");
    })

    .createTable("training_type", function (table) {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("description");
    })

    .createTable("training", function (table) {
      table.increments("id").primary();
      table.string("required");
      table.boolean("status");
      table.integer("training_type");
      table.date("date_completed");
    })

    .createTable("personnel", function (table) {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.integer("DOD_number").notNullable();
      table.integer("medical_id");
      table.integer("training_id");
    })

    .then(() => {
      return knex.schema.table("personnel", function (table) {
        table.foreign("medical_id").references("medical.id");
        table.foreign("training_id").references("training.id");
      });
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("personnel")
    .dropTableIfExists("training")
    .dropTableIfExists("training_type")
    .dropTableIfExists("medical");
};
