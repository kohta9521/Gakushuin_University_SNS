const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express!!!");
});

app.get("/users", (req, res) => {
  res.send("Users Express!!!");
});

app.listen(PORT, () => console.log("サーバーが起動しました"));
