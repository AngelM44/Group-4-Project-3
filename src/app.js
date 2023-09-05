const express = require("express");
const knex = require("knex")(
  require("../knexfile.js")[process.env.NODE_ENV || "development"]
);
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

const tables = ["medical", "training_type", "training", "personnel"];

app.get("/training", async (req, res) => {
  try {
    const data = await knex("training")
      .join("personnel", "training.id", "=", "personnel.training_id")
      .select("training.*", "personnel.name");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "Data not found" });
  }
});

app.get("/training/:idOrName", async (req, res) => {
  try {
    let query = knex("training")
      .join("personnel", "training.id", "=", "personnel.training_id")
      .select("training.*", "personnel.name");

    if (isNaN(req.params.idOrName)) {
      query.where("personnel.name", "ilike", `%${req.params.idOrName}%`);
    } else {
      query.where("training.id", req.params.idOrName);
    }

    const data = await query;
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "Data not found" });
  }
});

app.get("/medical", async (req, res) => {
  try {
    const data = await knex("medical")
      .join("personnel", "medical.id", "=", "personnel.medical_id")
      .select("medical.*", "personnel.name");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "Data not found" });
  }
});

app.get("/medical/:idOrName", async (req, res) => {
  try {
    let query = knex("medical")
      .join("personnel", "medical.id", "=", "personnel.medical_id")
      .select("medical.*", "personnel.name");

    if (isNaN(req.params.idOrName)) {
      query.where("personnel.name", "ilike", `%${req.params.idOrName}%`);
    } else {
      query.where("medical.id", req.params.idOrName);
    }

    const data = await query;
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "Data not found" });
  }
});
app.post("/personnel", async (req, res) => {
  try {
    const [{ id: medicalId }] = await knex("medical")
      .insert({
        status: req.body.medicalStatus,
        "checkup due by": req.body.checkup_due_by,
        "immunization due": req.body.immunization_due
      })
      .returning("id");
    const [{ id: trainingId }] = await knex("training")
      .insert({
        status: req.body.trainingStatus,
        training_type_id: req.body.training_type_id,
        date_completed: req.body.date_completed
      })
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
      const data = await knex(table).select("*");
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(404).json({ message: "Data not found" });
    }
  });

  app.get(`/${table}/:idOrName`, async (req, res) => {
    try {
      let query = knex(table).select("*");

      if (isNaN(req.params.idOrName)) {
        query.where("name", "ilike", `%${req.params.idOrName}%`);
      } else {
        query.where("id", req.params.idOrName);
      }

      const data = await query;
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(404).json({ message: "Data not found" });
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
