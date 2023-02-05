const router = requier("express").Router();

router.get("/", (req, res) => {
  res.send("user router");
});

module.exports = router;
