const db = require("../../db/dbConfig");
const { getGradesByStudentIdV2 } = require("./gradesQueriesV2");
const getAllStudentsV2 = async () => {
  const students = await db.any("SELECT * FROM students");
  return students;
};

const getAllStudentsWithGradesV2 = async () => {
  const students = await db.any("SELECT * FROM students");
  const results = [];
  for (let student of students) {
    const id = student.id;
    const grades = await getGradesByStudentIdV2(id);
    const copy = { ...student };
    copy.grades = grades;
    results.push(copy);
  }
  return results;
};

const getStudentByIdV2 = async (id) => {
  const student = await db.oneOrNone("SELECT * FROM students WHERE id = $1", [
    id,
  ]);
  return student;
};

module.exports = {
  getAllStudentsV2,
  getStudentByIdV2,
  getAllStudentsWithGradesV2,
};
