const express = require("express");
const app = express();
require("dotenv").config();
require("./src/config/db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
var cors = require('cors')
app.use(cors())
const port = process.env.PORT || 3000;
const routes = require("./src/routes/router");
app.use("/", routes);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})