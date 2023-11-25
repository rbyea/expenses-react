const express = require("express");
const Income = require("../models/Income");
const auth = require("../middleware/auth.middleware");
const router = express.Router({ mergeParams: true });

router
  .get("/", auth, async (req, res) => {
    try {
      const { orderBy, equalTo } = req.query;
      const list = await Income.find({ [orderBy]: equalTo });
      res.send(list);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  })
  .post("/", auth, async (req, res) => {
    try {
      const newItem = await Income.create({
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
      const updateItem = await Income.findByIdAndUpdate(
        {
          _id: req.body._id,
        },
        {
          number: req.body.number,
          description: req.body.description,
          type: req.body.type,
          userId: req.user._id,
        },
        {
          new: true,
        }
      );

      res.send(updateItem);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
        error: error.message,
      });
    }
  })
  .delete("/:itemId", auth, async (req, res) => {
    try {
      const itemId = req.params.itemId;
      await Income.deleteMany({ _id: itemId });

      res.send(null);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  });

module.exports = router;
