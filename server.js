const express = require("express");
const app = express();
const port = process.env.PORT || 3333;
const routes  = require('./src/routes');
app.use(routes);

app.listen(port);