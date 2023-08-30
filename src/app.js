const express = require("express");
const knex = require("knex")(
  require("../knexfile.js")[process.env.NODE_ENV || "development"]
);

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

const tables = ["medical", "training_type", "training", "personnel"];

app.post("/personnel", async (req, res) => {
  try {
    const [{ id: medicalId }] = await knex("medical")
      .insert({})
      .returning("id");
    const [{ id: trainingId }] = await knex("training")
      .insert({})
      .returning("id");

    await knex("personnel").insert({
      name: req.body.name,
      DOD_number: req.body.DOD_number,
      deployable: req.body.deployable,
      medical_id: medicalId,
      training_id: trainingId,
    });

    res.status(201).json({ message: "Personnel added successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Bad request", error: err });
  }
});

tables.forEach((table) => {
  app.get(`/${table}`, async (req, res) => {
    try {
      let query = knex(table).select("*");

      if (req.query.name) {
        query.where("name", "ilike", `%${req.query.name}%`);
      }
      if (req.query.id) {
        query.where("id", req.query.id);
      }

      const data = await query;
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(404).json({ message: "Data not found" });
    }
  });

  app.get(`/${table}/:id`, async (req, res) => {
    try {
      const data = await knex(table).where("id", req.params.id).select("*");
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Bad request", error: err });
    }
  });

  app.get("/personnel/:name", async (req, res) => {
    try {
      const data = await knex("personnel")
        .where("name", "ilike", `%${req.params.name}%`)
        .select("*");
      if (data.length > 0) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Personnel not found" });
      }
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Bad request", error: err });
    }
  });

    app.post(`/${table}`, async (req, res) => {
      try {
        await knex(table).insert(req.body);
        res.status(201).json(req.body);
      } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Bad request", error: err });
      }
    });

  app.patch(`/${table}/:id`, async (req, res) => {
    try {
      await knex(table).where("id", req.params.id).update(req.body);
      res.status(200).json(req.body);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Bad request", error: err });
    }
  });

  app.delete(`/${table}/:id`, async (req, res) => {
    try {
      await knex(table).where("id", req.params.id).del();
      res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Bad request" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
