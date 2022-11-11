const { Router } = require("express");
const router = Router();
const RenderHome = require("../render/index");

// Home route.
router.get("/", (req, res) => {
  res
    .status(200)
    .send(RenderHome());
});

module.exports = router;