const express = require("express");
const studentsController = express.Router();
const { getAllStudents, getOneStudent } = require("../queries/studentsQueries");

studentsController.get("/", (req, res) => {
  try {
    const students = getAllStudents();
    // students.split(" ");
    res.status(200).json({ data: students });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

studentsController.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const student = getOneStudent(id);
    if (student) {
      res.status(200).json({ data: student });
    } else {
      res.status(404).json({ error: `Student with id ${id} not found` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = studentsController;
