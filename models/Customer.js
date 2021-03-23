var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var CustomerSchema = new mongoose.Schema({
    name: String,
    product: Schema.Types.ObjectId,
    city: String,
    updated_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Customer", CustomerSchema);