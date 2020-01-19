const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MonumentSchema = new Schema({
    ref: String,
    name: String,
    summary: String,
    createdAt: Date
})

const Monument = mongoose.model("Monument", MonumentSchema)
module.exports = Monumnet