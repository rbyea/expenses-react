const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/users", require("./users.routes"));
router.use("/income", require("./income.routes"));
router.use("/expenses", require("./expenses.routes"));
router.use("/categories", require("./categories.routes"));

module.exports = router;
