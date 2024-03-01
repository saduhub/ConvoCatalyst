const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });

const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI
);

module.exports = mongoose.connection;