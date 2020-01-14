const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: String,
    text: String,
    createdAt: Date
})

const Blog = mongoose.model("Blog", BlogSchema)
module.exports = Blog