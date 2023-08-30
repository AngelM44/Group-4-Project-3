/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("medical", function (table) {
      table.increments("id").primary();
      table.enu("status", ["green", "red"]);
      table.date("checkup due by");
      table.boolean("immunization due");
    })

    .createTable("training_type", function (table) {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("description");
    })

    .createTable("training", function (table) {
      table.increments("id").primary();
      table.enu("status", ["green", "red"]);
      table.integer("training_type_id");
      table.foreign("training_type_id").references("training_type.id");
      table.date("date_completed");
    })

    .createTable("personnel", function (table) {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.integer("DOD_number").notNullable();
      table.enu("deployable", ["Yes", "No"]);
      table.integer("medical_id").unique().notNullable();
      table.integer("training_id").unique().notNullable();
      table.foreign("medical_id").references("medical.id");
      table.foreign("training_id").references("training.id");
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
