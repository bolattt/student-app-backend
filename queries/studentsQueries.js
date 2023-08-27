const studentsData = require("../data/students.json");

const getAllStudents = () => {
  return studentsData.students;
};

const getStudentById = (id) => {
  return studentsData.students.find((student) => student.id === id);
};

module.exports = {
  getAllStudents,
  getStudentById,
};
