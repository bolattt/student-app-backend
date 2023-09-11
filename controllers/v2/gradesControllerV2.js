const express = require("express");
const gradesControllerV2 = express.Router();
const {
  getAllGradesV2,
  getGradeByIdV2,
} = require("../../queries/v2/gradesQueriesV2");

gradesControllerV2.get("/", async (req, res) => {
  const grades = await getAllGradesV2();
  try {
    res.status(200).json({ data: grades });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

gradesControllerV2.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const grade = await getGradeByIdV2(id);
    if (grade) {
      res.status(200).json({ data: grade });
    } else {
      res.status(404).json({ error: `Grade with id ${id} not found` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = gradesControllerV2;
