/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const seedDataMedical = [
  {
    id: 1,
    status: true,
    "checkup due by": (new Date('4/9/2023')),
    immunization: true
  },
  {
    id: 2,
    status: true,
    "checkup due by": (new Date('4/9/2023')), 
    immunization: false
  },
  {
    id: 3,
    status: true,
    "checkup due by": (new Date('4/9/2023')),
    immunization: true
  },
  {
    id: 4,
    status: false,
    "checkup due by": (new Date('4/9/2023')),
    immunization: false
  },
  {
    id: 5,
    status: true,
    "checkup due by": (new Date('4/9/2023')),
    immunization: true
  }
]

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('medical').del()
  await knex('medical').insert(seedDataMedical);
};
