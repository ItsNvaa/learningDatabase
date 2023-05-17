const express = require("express");
const mysql = require("mysql");

const app = express();

app.set("view engine", "ejs");
app.set("views", "src");

const db = mysql.createConnection({
  host: "127.0.0.1",
  database: "punyanvaa",
  user: "root",
  password: "",
});

db.connect((err) => {
  if (err) throw err;
  console.log("connected");

  const sql = "SELECT * FROM databasemurid";
  db.query(sql, (err, result) => {
    const users = JSON.parse(JSON.stringify(result));
    console.log("hasil", users);
    app.get("/", (req, res) => {
      res.render("index", { users: users });
    });
  });
});

app.listen(8000, () => {
  console.log("server ready...");
});
