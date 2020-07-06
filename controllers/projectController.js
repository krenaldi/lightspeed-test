const express = require("express");
const router = express.Router();

// Import the model (project.js) to use its database functions.
const project = require("../models/project.js");

// GET route for ALL Employees on index.hbs
router.get("/", function (req, res) {
    project.getEmployees(function (result) {
        res.render("index", { member_data: result });
    });
});

// GET route for ALL Projects by Employee
router.get("/projects/:id", function (req, res) {
    let condition = req.params.id;
    project.getProjects(condition, function (result) {
        res.render("projects", { project_data: result });
    });
});

// GET route for ALL Tasks by Projects 
router.get("/tasks/:id", function (req, res) {
    let condition = req.params.id;
    project.getTasks(condition, function (result) {
        res.render("tasks", { task_data: result });
    });
});

module.exports = router;