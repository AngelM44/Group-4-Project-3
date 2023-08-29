/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const seedDataUsers = [
  {
    name: "Madison Holtcombe",
    DOD_number: 31253,                  // 78429
    //medical_id: 1,
    //training_id: 1
  },
  {
    name: "Anne MacCloskey",
    DOD_number: 69484,                  // 16903
    //medical_id: 2,
    //training_id: 2
  },
  {
    name: "Fujita Yukaharo",
    DOD_number: 97975,                 // 15788
    //medical_id: 3,
    //training_id: 3
  },
  {
    name: "Antonis Koumoundouros",
    DOD_number: 74568,                // 56324
    //medical_id: 4,
    //training_id: 4
  },
  {
    name: "Phegeus Baptiste",
    DOD_number: 602608,              // 2159
    //medical_id: 5,
    //training_id: 5
  }
]

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('personnel').del()
  await knex('personnel').insert(seedDataUsers);
};
