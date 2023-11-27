const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/auth.middleware");
const router = express.Router({ mergeParams: true });

router
  .get("/", async (req, res) => {
    try {
      const list = await User.find();
      res.send(list);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  })
  .patch("/:userId", auth, async (req, res) => {
    try {
      const { userId } = req.params;
      if (userId === req.user._id) {
        const updateData = req.body;
        const updateUser = await User.findByIdAndUpdate(userId, updateData, {
          new: true,
        });
        res.send(updateUser);
      } else {
        res.status(401).json({ message: "Unauthorized" });
      }
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  });

module.exports = router;
