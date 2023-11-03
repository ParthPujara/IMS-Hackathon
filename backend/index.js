const express = require('express');
const app = express();
const port = process.env.PORT || 2222;
const cors = require('cors');
const connection = require('./db');
require('dotenv').config();
const auth = require('./routes/auth');
const manager = require('./routes/manager');
const employee = require('./routes/employee');

connection();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(auth);
app.use(manager);
app.use(employee);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});