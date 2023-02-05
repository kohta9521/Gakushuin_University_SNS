const router = require("exporess").Router();

router.get("/", (req, res) => {
    res.send("user router");
});

module.export = router;