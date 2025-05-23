// ProductModel.js
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true, unique: true },
  images: [{ type: String, required: true }],
});

module.exports = mongoose.model("Category", categorySchema);
