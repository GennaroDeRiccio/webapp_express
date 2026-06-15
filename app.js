const express = require("express");

const app = express();

const port = process.env.PORT;

// Middlewares
const errorsHandler = require("./middlewares/errorsHandler");
const notFound = require("./middlewares/notFound");

app.use(express.static("public"));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is up");
});

app.listen(port, () => {
  console.log("Movies app listening on port " + port);
});
