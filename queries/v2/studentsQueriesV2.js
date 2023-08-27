const studentsDataV2 = require("../../data/v2/studentsDataV2.json");

const getAllStudentsV2 = () => {
  return studentsDataV2.students;
};

const getStudentByIdV2 = (id) => {
  return studentsDataV2.students.find((student) => student.id === id);
};

module.exports = {
  getAllStudentsV2,
  getStudentByIdV2,
};
