/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const seedDataTrainingTypes = [
  {
    name: "Religious Training",
    description: "Understanding the first amendment."
  },
  {
    name: "FTX",
    description: "Weapons and field training."
  },
  {
    name:  "ROTC",
    description: "Basic and physical training."
  },
  {
    name:  "Mission Briefing",
    description: "Mission overview and planning with commanding officer."
  },
  {
    name:  "Survival Training",
    description: "How to survive as a MIA or POW."
  }
]

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('training_type').del()
  await knex('training_type').insert(seedDataTrainingTypes);
};
