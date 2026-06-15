const express = require("express");

const router = express.Router();

const movieController = require("../controllers/movieController");

// # ROTTE PER I FILM

// Index

router.get("/", movieController.index);

// show

router.get("/:id", movieController.show);

module.exports = router;
