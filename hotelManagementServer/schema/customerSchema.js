const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
    userId: String,
    passWord: String
})


module.exports = mongoose.model('userDataOfCustomers', customerSchema);