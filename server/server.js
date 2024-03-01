const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
// Connect to database 
require("dotenv").config({ path: path.join(__dirname, "../.env") });
mongoose.connect(
    process.env.MONGODB_URI
);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) =>
    res.sendFile('../client/dist/index.html')
);
