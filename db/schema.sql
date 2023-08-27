DROP DATABASE IF ALREADY EXISTS students_db;
CREATE DATABASE students_db;

CREATE TABLE students (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);