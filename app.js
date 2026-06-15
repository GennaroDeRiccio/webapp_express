const express = require("express");

const app = express();

const port = process.env.PORT;

const movieRouter = require("./routers/movieRouter");

// Middlewares
const errorsHandler = require("./middlewares/errorsHandler");
const notFound = require("./middlewares/notFound");
const imagePathMiddleware = require("./middlewares/imagePath");

app.use(express.static("public"));

app.use(express.json());

app.use(imagePathMiddleware);

app.get("/", (req, res) => {
  res.send("Server is up");
});

app.use("/api/movies", movieRouter);

app.listen(port, () => {
  console.log("Movies app listening on port " + port);
});
