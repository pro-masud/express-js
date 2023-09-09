const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();

// create a Port Number

const PORT = process.env.PORT || 6060;

const app = express();

// get method outpur data main domain routeing
app.get("/", (req, res) => {
    res.send("This is a Home Page");
});

// blog route
app.get("/blog", (req, res) => {
    res.send("This is a Blog Page");
});

// about route
app.get("/about", (req, res) => {
    res.send("This is a About Page");
});


// contact route
app.get("/contact", (req, res) => {
    res.send("This is a Contact Page");
});


// anything route for 404 page
app.get("*", (req, res) => {
    res.send("404 Page");
});

app.listen(PORT, () => {
    console.log(`Server Is Running ${PORT} Port`.bgGreen.black);
})