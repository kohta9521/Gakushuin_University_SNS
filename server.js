const express = require('express');
const app = express();
const PORT = 3000;
// const userRoute = require("./routes/users");

app.get("/", (req, res) => {
    res.send("Hello express");
})

app.get("/users", (req, res) => {
    res.send("users express");
})

app.listen(PORT, () => console.log("サーバーが起動しました"));