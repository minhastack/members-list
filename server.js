const express = require("express");
const app = express();
const port = process.env.PORT || 3333;

const cors = require('cors');
const routes  = require('./src/routes');


app.use(cors);
app.use(routes);

app.listen(port);