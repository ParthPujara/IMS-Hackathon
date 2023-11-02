const express = require('express');
const app = express();
const port = process.env.PORT || 2222;
const cors = require('cors');
const connection = require('./db');
require('dotenv').config();

connection();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});