const express = require("express");
const db = require("./config/connection");
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    console.log('db connected');
    app.listen(PORT, () => {
        console.log(`Running on port ${PORT}!`);
    });
});