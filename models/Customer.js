var mongoose = require("mongoose");

var CustomerSchema = new mongoose.Schema({
    name: String,
    product: String,
    city: String,
    updated_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Customer", CustomerSchema);