// Seed file 'seeds' the database with some inital data. Allows for quick testing
import Database from "better-sqlite3";

const db = new Database("database.db");

// Executes a sql query.
// Always use ``
db.exec(
  `CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    movie TEXT,
    year INTEGER,
    imgURL TEXT
)`
);

// Primary key -flagging our id as our records unique identifier

db.exec(
  `
INSERT into movies (movie, year, imgURL)
VALUES
('Black Narcissus', 1947, 'https://xl.movieposterdb.com/07_11/1947/39192/xl_39192_20b67beb.jpg?v=2022-09-02%2021:20:08'),
('Apocalypse Now', 1979, 'https://xl.movieposterdb.com/11_11/1979/78788/xl_78788_813724ff.jpg?v=2023-11-27%2022:26:45')`
);
