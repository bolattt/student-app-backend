const express = require("express");
const studentsControllerV2 = express.Router();
const {
  getAllStudentsV2,
  getStudentByIdV2,
} = require("../../queries/v2/studentsQueriesV2");

studentsControllerV2.get("/", (req, res) => {
  try {
    const students = getAllStudentsV2();
    // students.split(" ");
    res.status(200).json({ data: students });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

studentsControllerV2.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const student = getStudentByIdV2(id);
    if (student) {
      res.status(200).json({ data: student });
    } else {
      res.status(404).json({ error: `Student with id ${id} not found` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = studentsControllerV2;
