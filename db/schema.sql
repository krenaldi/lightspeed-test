CREATE DATABASE IF NOT EXISTS lightspeed_db;

USE lightspeed_db;

-- Create the table for Employees assigned to Projects
CREATE TABLE employees
(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, -- primary key column
    first_name VARCHAR(50) NOT NULL
);

-- Create the table for Projects
CREATE TABLE projects
(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, -- primary key column
    title VARCHAR(50) UNIQUE NOT NULL
);

-- Create the table for Tasks on Each Project
CREATE TABLE tasks
(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, -- primary key column
    task_name VARCHAR(50) NOT NULL,
    duration INT NOT NULL,
    project_id INT UNSIGNED NOT NULL,
    INDEX proj_idx (project_id),
    CONSTRAINT fk_project FOREIGN KEY (project_id) REFERENCES projects(id),
    employee_id INT UNSIGNED NOT NULL,
    INDEX employee_idx (employee_id),
    CONSTRAINT fk_employee FOREIGN KEY (employee_id) REFERENCES employees(id)
);