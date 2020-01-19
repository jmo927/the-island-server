const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HexSchema = new Schema({
    hexNumber: String,
    terrain: String,
    createdAt: Date
})

const Hex = mongoose.model("Hex", HexSchema)
module.exports = Hex