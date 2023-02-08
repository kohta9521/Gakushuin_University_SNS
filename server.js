const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const PORT = 3000;

// ミドルウェアの設定
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
  res.send("Hello Express!!!");
});

// app.get("/users", (req, res) => {
//   res.send("Users Express!!!");
// });

app.listen(PORT, () => console.log("サーバーが起動しました"));
