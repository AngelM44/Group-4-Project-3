/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const seedDataTraining = [
  {
    id: 1,
    required: false,
    status: true,
    training_type: 3,
    date_completed: '10/29/2007'
  },
  {
    id: 2,
    required: true,
    status: true,
    training_type: 2,
    date_completed: '4/17/2011'
  },
  {
    id: 3,
    required: true,
    status: true,
    training_type: 4,
    date_completed: '10/22/2001'
  },
  {
    id: 4,
    required: false,
    status: true,
    training_type: 1,
    date_completed: '1/9/2007'
  },
  {
    id: 5,
    required: true,
    status: false,
    training_type: 3,
    date_completed: '2/13/2020'
  }
]

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('training').del()
  await knex('training').insert(seedDataTraining);
};
