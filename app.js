const express = require("express");
const cors = require("cors");
const studentsController = require("./controllers/studentsController");
const studentsControllerV2 = require("./controllers/v2/studentsControllerV2");

const app = express();
app.use(cors());
app.use(express.json());

// controllers
app.use("/students", studentsController);
app.use("/v2/students", studentsControllerV2);

app.get("/", (req, res) => {
  res.status(200).json({ data: "Student App is live!" });
});

module.exports = app;
