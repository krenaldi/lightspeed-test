// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const project = {
    getEmployees: function (cb) {
        orm.getEmployees("employees", function (res) {
            cb(res)
        });
    },
    getProjects: function (condition, cb) {
        orm.getProjects("tasks", "employees", "projects", "duration", "first_name", "id", "title", "employee_id", "project_id", condition, function (res) {
            cb(res);
        });
    },
    getTasks: function (condition, cb) {
        orm.getTasks("tasks", "employees", "projects", "task_name", "duration", "first_name", "title", "employee_id", "project_id", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = project;