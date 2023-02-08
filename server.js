const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const PORT = 3000;

// ミドルウェアの設定
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Hello Express!!!");
});

// app.get("/users", (req, res) => {
//   res.send("Users Express!!!");
// });

app.listen(PORT, () => console.log("サーバーが起動しました"));
