const express = require("express");

const PORT = process.env.PORT || 8000;
const app = express();

// Serve static content from public directory
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Bring in express handlebars
const exphbs = require("express-handlebars");

// Configure view engine to use main file for default layout and .hbs files extensions
app.engine(".hbs", exphbs({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", ".hbs");

// SETUP ROUTES


// Start server
app.listen(PORT, function () {
    console.log("🌎 Listening on port:%s", PORT);
});