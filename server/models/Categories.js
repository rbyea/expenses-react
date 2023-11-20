const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    label: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Categories", schema);
