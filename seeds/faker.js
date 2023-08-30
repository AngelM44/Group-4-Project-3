const faker = require("faker");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("personnel").del();
  await knex("training").del();
  await knex("training_type").del();
  await knex("medical").del();

  const medicalData = [];

  for (let i = 1; i <= 10; i++) {
    medicalData.push({
      status: faker.random.arrayElement(["green", "red"]),
      "checkup due by": faker.date.future(),
      "immunization due": faker.datatype.boolean(),
    });
  }

  const trainingTypeData = [];

  for (let i = 1; i <= 10; i++) {
    trainingTypeData.push({
      name: faker.hacker.verb() + " training",
      description: faker.company.catchPhrase(),
    });
  }

  const trainingData = [];

  for (let i = 1; i <= 10; i++) {
    trainingData.push({
      status: faker.random.arrayElement(["green", "red"]),
      training_type_id: i,
      date_completed: faker.date.past(),
    });
  }

  const personnelData = [];

  for (let i = 1; i <= 10; i++) {
    personnelData.push({
      name: faker.name.findName(),
      DOD_number: faker.datatype.number({ min: 1000000000, max: 2147483647 }),
      deployable: faker.random.arrayElement(["Yes", "No"]),
      medical_id: i, 
      training_id: i, 
    });
  }

  await knex("medical").insert(medicalData);
  await knex("training_type").insert(trainingTypeData);
  await knex("training").insert(trainingData);
  await knex("personnel").insert(personnelData);
};
