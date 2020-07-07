CREATE DATABASE IF NOT EXISTS lightspeed_db;

USE lightspeed_db;

CREATE TABLE employees
(
    id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);

-- Create the table for Projects
CREATE TABLE projects
(
    id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    title VARCHAR(50) UNIQUE NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);

-- Create the table for Tasks on Each Project
CREATE TABLE tasks
(
    id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    task_name VARCHAR(50) NOT NULL,
    duration INT NOT NULL,
    project_id INT UNSIGNED NOT NULL,
    INDEX proj_idx (project_id),
    CONSTRAINT fk_project FOREIGN KEY (project_id) REFERENCES projects(id),
    employee_id INT UNSIGNED NOT NULL,
    INDEX employee_idx (employee_id),
    CONSTRAINT fk_employee FOREIGN KEY (employee_id) REFERENCES employees(id),
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);