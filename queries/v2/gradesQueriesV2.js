const db = require("../../db/dbConfig");
const getGradesByStudentIdV2 = async (studentId) => {
  const grades = await db.any("SELECT * FROM grades WHERE student_id = $1", [
    studentId,
  ]);
  return grades;
};

const getAllGradesV2 = () => {
  return gradesDataV2.grades;
};

const getGradeByIdV2 = (id) => {
  return gradesDataV2.grades.find((grade) => grade.id === id);
};

module.exports = {
  getAllGradesV2,
  getGradeByIdV2,
  getGradesByStudentIdV2,
};
