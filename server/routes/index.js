const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/users", require("./users.routes"));
router.use("/income", require("./income.routes"));

module.exports = router;
