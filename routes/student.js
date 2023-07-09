const express = require("express");
const students = express.Router();
const studentData = require("../data/students.json");

students.get("/", (req, res) => {
  try {
    const { students } = studentData;
    res.status(200).json({ data: students });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

students.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const student = studentData.students.find((student) => student.id === id);
    res.status(200).json({ data: student });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = students;
