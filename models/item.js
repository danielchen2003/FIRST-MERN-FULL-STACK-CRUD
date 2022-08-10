const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Item = new Schema(
  {
    title: { type: "string", require: true },
    link: { type: "string", require: true },
  },
  { timestamp: true }
)

module.exports = mongoose.model("items", Item)
