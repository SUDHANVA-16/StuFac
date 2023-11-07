const mongoose = require('mongoose');
const fac = mongoose.Schema({
    id: Number,
    name: String,
    branch: String,
    sal: Number
})
module.exports = mongoose.model("Faculty", fac)