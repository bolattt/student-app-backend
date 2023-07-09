const express = require("express");
const app = express();
const cors = require("cors");
const studentsRouter = require("./routes/student");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ data: "Student App is live!" });
});

app.use("/students", studentsRouter);

module.exports = app;
