const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router({ mergeParams: true });
const User = require("../models/User");
const tokenService = require("../service/token.service");
const { check, validationResult } = require("express-validator");

router.post("/signUp", [
  check("name", "Минимальная длина поля 3 символа").isLength({ min: 3 }),
  check("email", "Некорректный email").isEmail(),
  check("password", "Минимальная длина пароля 8 символов").isLength({ min: 8 }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: "INVALID_DATA",
            code: 400,
          },
        });
      }

      const { email, password, name } = req.body;

      const exitingUser = await User.findOne({ email });

      if (exitingUser) {
        return res.status(400).json({
          error: {
            message: "EMAIL_EXISTS",
            code: 400,
          },
        });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = await User.create({
        ...req.body,
        password: hashedPassword,
        name,
      });

      const tokens = tokenService.generate({ _id: newUser._id });
      await tokenService.save(newUser._id, tokens, refreshToken);

      res.status(201).send({ ...tokens, userId: newUser._id });
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  },
]);

module.exports = router;
