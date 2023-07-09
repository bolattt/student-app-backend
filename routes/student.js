const express = require("express");
const students = express.Router();
const studentData = require("../data/students.json");

students.get("/", (req, res) => {
  res.json(studentData);
});

students.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json(studentData.students[id]);
});

module.exports = students;
