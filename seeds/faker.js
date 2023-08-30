const faker = require("faker");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("training").del();
  await knex("training_type").del();
  await knex("medical").del();
  await knex("personnel").del();

  const medicalData = Array.from({ length: 10 }, () => ({
    status: faker.random.arrayElement(["green", "red"]),
    "checkup due by": faker.date.future(),
    "immunization due": faker.datatype.boolean(),
  }));

  const trainingTypeData = Array.from({ length: 5 }, () => ({
    name: faker.hacker.verb() + " training",
    description: faker.company.catchPhrase(),
  }));

  const trainingData = Array.from({ length: 10 }, () => ({
    status: faker.random.arrayElement(["green", "red"]),
    training_type_id: faker.datatype.number({ min: 1, max: 5 }),
    date_completed: faker.date.past(),
  }));

  const personnelData = Array.from({ length: 10 }, () => ({
    name: faker.name.findName(),
    DOD_number: faker.datatype.number({ min: 1000000000, max: 2147483647 }),
    deployable: faker.random.arrayElement(["Yes", "No"]),
    medical_id: faker.datatype.number({ min: 1, max: 10 }),
    training_id: faker.datatype.number({ min: 1, max: 10 }),
  }));

  await knex("medical").insert(medicalData);
  await knex("training_type").insert(trainingTypeData);
  await knex("training").insert(trainingData);
  await knex("personnel").insert(personnelData);
};
