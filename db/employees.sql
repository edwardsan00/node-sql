CREATE DATABASE IF NOT EXISTS company;

USE company;

CREATE TABLE employees (
	id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(11) DEFAULT NULL,
    PRIMARY KEY(id)
);

DESCRIBE employees;

INSERT INTO employees values 
	(1, 'Edward Sanchez', 2000),
    (2, 'Jesus Mendoza', 3000),
    (3, 'Carlos Perez', 1000);
    
SELECT * FROM employees;
