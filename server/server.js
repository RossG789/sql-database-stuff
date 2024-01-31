import express from "express";
import cors from "cors";

import Database from "better-sqlite3";

const app = express();
const PORT = "6060";
const db = new Database("database.db");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("H-...Hiiii	ԅ(≖‿≖ԅ)");
});

app.get("/movies", (req, res) => {
  try {
    if (req.query.id) {
      res.status(200).json();
      console.log("Thanks for the query!");
    }
    let movies = db.prepare(`SELECT * FROM movies`).all();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/movies", (req, res) => {
  try {
    const movie = req.body.movie;
    const year = req.body.year;

    const newMovie = db
      .prepare(`INSERT INTO movies (movie, year) VALUES (?,?)`)
      .run(movie, year);

    res.status(200).json(newMovie);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(PORT, () => {
  console.log(`ԅ(≖‿≖ԅ) Server started on PORT: ${PORT}`);
});
