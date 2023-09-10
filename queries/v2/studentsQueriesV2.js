const studentsDataV2 = require("../../data/v2/studentsDataV2.json");

const { getGradesByStudentIdV2 } = require("./gradesQueriesV2");
const getAllStudentsV2 = () => {
  return studentsDataV2.students;
};

const getAllStudentsWithGradesV2 = () => {
  const { students } = studentsDataV2;
  return students.map((student) => {
    return { ...student, grades: getGradesByStudentIdV2(student.id) };
  });
};

const getStudentByIdV2 = (id) => {
  return studentsDataV2.students.find((student) => student.id === id);
};

module.exports = {
  getAllStudentsV2,
  getStudentByIdV2,
  getAllStudentsWithGradesV2,
};
