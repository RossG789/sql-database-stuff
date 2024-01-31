// Seed file 'seeds' the database with some inital data. Allows for quick testing
import Database from "better-sqlite3";

const db = new Database("database.db");

// Executes a sql query.
// Always use ``
db.exec(`CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    movie TEXT,
    year INTEGER
)`);

// Primary key -flagging our id as our records unique identifier

db.exec(`
INSERT into movies (movie, year)
VALUES
('Black Narcissus', 1947),
('Ran', 1985),
('Apocalypse Now', 1979),
('To Kill A Mockingbird', 1962),
('Taxi Driver', 1976),
('Legend of the Fall', 1994)`);
