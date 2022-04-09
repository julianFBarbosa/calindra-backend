const express = require("express");
require("express-async-errors");
const cors = require("cors");
const routes = require("./routes");
const host = "http://localhost:";
const port = 3001;

const app = express();

app.use(cors());
app.use(routes);

app.use((error, _request, response, _next) => {
  console.log("----- An unexpected error has been ocurred -----");
  console.log(error);
  response.status(500).send(error);
});

app.listen(port, () => {
  console.log(`Server started at: ${host}${port}`);
});
