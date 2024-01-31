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
    if (req.query) {
      res.status(200).json();
      console.log("Thanks for the query!");
    }
    let movies = db.prepare(`SELECT * FROM movies`).all();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(PORT, () => {
  console.log(`ԅ(≖‿≖ԅ) Server started on PORT: ${PORT}`);
});