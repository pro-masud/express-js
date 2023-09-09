const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const path = require("path");
// create a Port Number

const PORT = process.env.PORT || 6060;

const app = express();

// create public folder using 
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/menu", (req, res) => {
    res.sendFile(path.join(__dirname, "public/menu.html") );
});

app.get("/news", (req, res) => {
    res.sendFile(path.join(__dirname, "public/news.html") );
});

app.get("/location", (req, res) => {
    res.sendFile(path.join(__dirname, "public/location.html"));
});

app.get("/reservation", (req, res) => {
    res.sendFile(path.join(__dirname, "public/reservation.html"));
});

app.get("/gallery", (req, res) => {
    res.sendFile(path.join(__dirname, "public/gallery.html"));
});

app.get("/staff", (req, res) => {
    res.sendFile(path.join(__dirname, "public/staff.html"));
});

app.get("/blog", (req, res) => {
    res.sendFile(path.join(__dirname, "public/archive.html"));
});

app.get("*", (req, res) => {
    res.sendFile(__dirname, "public/404.html");
})


app.listen(PORT, () => {
    console.log(`Server Is Running ${PORT} Port`.bgGreen.black);
})