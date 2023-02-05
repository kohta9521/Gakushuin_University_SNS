const express = require('express');
const app = express();
const userRoute = require("./routes/users");
const PORT = 3000;
// const userRoute = require("./routes/users");

// ミドルウェア
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
    res.send("Hello express");
});

// app.get("/users", (req, res) => {
//     res.send("users express");
// })

app.listen(PORT, () => console.log("サーバーが起動しました"));