const connection = require("../data/db");

function index(req, res) {
  console.log("Entrato nell'index");

  const sql = "SELECT * FROM movies;";

  connection.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        error: "Database query failed",
      });
    }

    res.json(results);
  });
}

function show(req, res) {
  console.log("Entrato nello show");

  const { id } = req.params;

  const sql = "SELECT * FROM movies WHERE id = ? ";

  connection.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        message: "Database query failed",
      });
    }

    const movie = results[0];
    if (!movie) {
      return res.status(404).json({
        message: "Movie does not exist",
      });
    }

    const reviewSQL = "SELECT * FROM reviews WHERE movie_id = ? ";

    connection.query(reviewSQL, [id], (err, reviewResults) => {
      if (err) {
        return res.status(500).json({
          error: err.message,
          message: "Database query failed",
        });
      }

      movie.reviews = reviewResults;

      res.json(movie);
    });
  });
}

module.exports = { index, show };
