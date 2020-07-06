// Object Relational Mapper (ORM)
const connection = require("./connection.js");
const { query } = require("express");

const orm = {
    getEmployees: function (table, cb) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    getProjects: function (tableOne, tableTwo, tableThree, tableOneCol, tableTwoCol, tableThreeCol, tableOneFkOne, tableOneFkTwo, condition, cb) {
        const queryString = "SELECT ??.?? AS name, ??.?? AS title, SUM(??.??) AS hours FROM ?? LEFT JOIN (??, ??) ON (??.??=??.id AND ??.??=??.id) WHERE ??.id = ? GROUP BY ??.??";
        console.log(queryString);

        connection.query(queryString, [tableTwo, tableTwoCol, tableThree, tableThreeCol, tableOne, tableOneCol, tableOne, tableTwo, tableThree, tableOne, tableOneFkOne, tableTwo, tableOne, tableOneFkTwo, tableThree, tableTwo, condition, tableThree, tableThreeCol], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    getTasks: function (tableOne, tableTwo, tableThree, tableOneCol, tableTwoCol, tableThreeCol, tableOneFkOne, tableOneFkTwo, condition, cb) {
        const queryString = "SELECT ??.?? AS title, ??.?? AS task, ??.?? AS member, ??.?? AS hours FROM ?? LEFT JOIN (??, ??) ON (??.??=??.id AND ??.??=??.id) WHERE ??.id = ?";
        console.log(queryString);

        connection.query(queryString, [tableThree, tableThreeCol, tableOne, tableOneCol, tableTwo, tableTwoCol, tableThree, tableThreeCol, tableOne, tableOneCol, tableOne, tableTwo, tableThree, tableOne, tableOneFkOne, tableTwo, tableOne, tableOneFkTwo, tableThree, tableTwo, condition], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

// Export the orm object for the model (project.js).
module.exports = orm;