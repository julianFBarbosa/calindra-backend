const express = require("express");
require("express-async-errors");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes");
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(routes);

app.use((error, _request, response, _next) => {
  console.log("----- An unexpected error has been ocurred -----");
  console.log(error);
  response.status(500).send(error);
});

app.listen(port);
