const mongoose = require("mongoose")
// production and connect mangoDB
let MONGODB_URI =
  process.env.PROD_MONGODB ||
  process.env.MONGODB_URI ||
  "mongodb://127.0.0.1:27017/itemsDatabase"

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("success connect to MongoDB")
  })
  .catch((e) => {
    console.error("conttions error", e.message)
  })

const db = mongoose.connection
module.exports = db
