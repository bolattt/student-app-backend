const gradesDataV2 = require("../../data/v2/gradesDataV2.json");

const getGradesByStudentIdV2 = (studentId) => {
  return gradesDataV2.grades.filter((grade) => grade.studentId === studentId);
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
