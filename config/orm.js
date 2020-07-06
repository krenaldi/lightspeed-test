// Object Relational Mapper (ORM)
const connection = require("./connection.js");
const { query } = require("express");

const orm = {
    getEmployees: function(table, cb) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    getProjects: function (tableOne, tableTwo, tableThree, tableOneCol, tableTwoCol, tableThreeCol, tableOneFk, condition, cb) {
        const queryString = "SELECT ??.??, ??.?? AS 'Project Title', SUM(??.??) AS 'Estimated Hours' FROM ?? LEFT JOIN (??, ??) ON (??.??=??.id AND ??.??=??.id) WHERE ??.id = ? GROUP BY ??.??";
        console.log(queryString);

        connection.query(queryString, [tableTwo, tableTwoCol, tableThree, tableThreeCol, tableOne, tableOneCol, tableOne, tableTwo, tableThree, tableOne, tableOneFk, tableTwo, tableOne, tableOneFk, tableThree, tableTwo, condition, tableThree, tableThreeCol], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    getTasks: function (tableOne, tableTwo, tableThree, tableOneCol, tableTwoCol, tableThreeCol, tableOneFk, condition, cb) {
        const queryString = "SELECT ??.?? AS 'Project Title', ??.?? AS 'Tasks', ??.?? AS 'Assigned To', ??.?? AS 'Estimated Hours' FROM ?? LEFT JOIN (??, ??) ON (??.??=??.id AND ??.??=??.id) WHERE ??.id = ?";
        console.log(queryString);

        connection.query(queryString, [tableThree, tableThreeCol, tableOne, tableOneCol, tableTwo, tableTwoCol, tableThree, tableThreeCol, tableOne, tableOneCol, tableOne, tableTwo, tableThree, tableOne, tableOneFk, tableTwo, tableOne, tableOneFk, tableThree, tableTwo, condition], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}