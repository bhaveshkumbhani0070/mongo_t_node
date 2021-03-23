var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var config=require('../config/config.json');
var ProductSchema = new mongoose.Schema({
    name: String,
    company: Schema.Types.ObjectId,
    price:Number,
    updated_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Product", ProductSchema);