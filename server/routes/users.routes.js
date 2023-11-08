const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/auth.middleware");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const list = await User.find();
    res.send(list);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

// router.get("/:userId", auth, async(req,res) => {
//   try {
//     const {userId} = req.params;

//     if(userId === req.user._id) {
//       const u
//     }
//   } catch (error) {
    
//   }
// })

module.exports = router;
