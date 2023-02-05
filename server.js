const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello exporess");
})

app.listen(PORT, () => console.log("サーバーが起動しました"));