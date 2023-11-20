const express = require("express");
const Categories = require("../models/Categories");
const auth = require("../middleware/auth.middleware");
const router = express.Router({ mergeParams: true });

router
  .get("/", async (req, res) => {
    try {
      const list = await Categories.find();
      res.send(list);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  });

module.exports = router;
