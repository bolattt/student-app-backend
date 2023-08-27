const express = require("express");
const app = express();
const cors = require("cors");
const studentsController = require("./controllers/studentsController");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ data: "Student App is live!" });
});

app.use("/students", studentsController);

module.exports = app;
