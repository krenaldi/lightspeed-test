// Object Relational Mapper (ORM)
const connection = require("./connection.js");

const orm = {
    getEmployees: function(table, cb) {
        const queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    getProjects: function() {
        
    }
}