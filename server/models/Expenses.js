const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    type: { type: String },
    number: { type: String },
    description: { type: String },
    category: { type: Schema.Types.ObjectId, ref: "Categories" },
  },
  {
    timestamps: { createdAt: "created_at" },
  }
);

module.exports = model("Expenses", schema);
