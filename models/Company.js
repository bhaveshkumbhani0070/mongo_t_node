var mongoose = require("mongoose");

var CompanySchema = new mongoose.Schema({
    name: String,
    status: String,
    updated_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Company", CompanySchema);