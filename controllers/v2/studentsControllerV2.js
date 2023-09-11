const express = require("express");
const studentsControllerV2 = express.Router();
const {
  getAllStudentsV2,
  getStudentByIdV2,
  getAllStudentsWithGradesV2,
} = require("../../queries/v2/studentsQueriesV2");
const { getGradesByStudentIdV2 } = require("../../queries/v2/gradesQueriesV2");

studentsControllerV2.get("/", async (req, res) => {
  try {
    const students = await getAllStudentsV2();
    const { include } = req.query;
    if (include === "grades") {
      const students = await getAllStudentsWithGradesV2();
      res.status(200).json({ data: students });
    } else {
      // students.split(" ");
      res.status(200).json({ data: students });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

studentsControllerV2.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await getStudentByIdV2(id);
    if (student) {
      res.status(200).json({ data: student });
    } else {
      res.status(404).json({ error: `Student with id ${id} not found` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /students/:id/grades

studentsControllerV2.get("/:id/grades", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await getStudentByIdV2(id);
    if (student) {
      const grades = await getGradesByStudentIdV2(id);
      console.log(grades);
      res.status(200).json({ data: grades });
    } else {
      res.status(404).json({ error: `Student with id ${id} not found` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = studentsControllerV2;
