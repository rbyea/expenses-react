const express = require("express");
const Expenses = require("../models/Expenses");
const auth = require("../middleware/auth.middleware");
const router = express.Router({ mergeParams: true });

router
  .get("/", async (req, res) => {
    try {
      const { orderBy, equalTo } = req.query;
      const list = await Expenses.find({ [orderBy]: equalTo });
      res.send(list);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  })
  .post("/", auth, async (req, res) => {
    try {
      const newItem = await Expenses.create({
        ...req.body,
        userId: req.user._id,
      });
      res.status(201).send(newItem);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  })
  .put("/", auth, async (req, res) => {
    try {
      const updateExpense = await Expenses.findOneAndReplace(
        {
          _id: req.body._id,
        },
        {
          number: req.body.number,
          description: req.body.description,
          category: req.body.category,
          type: req.body.type,
          userId: req.user._id,
        }
      );

      res.send(updateExpense);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
        error: error.message,
      });
    }
  });

module.exports = router;
