var express = require('express');
var router = express.Router();
const path = require('path');
const mongoose = require("mongoose");
var bodyParser = require('body-parser');
var urlParser = bodyParser.urlencoded({ extended: false });
/* GET home page. */
const custSchema = mongoose.Schema({
    userId: String,
    passWord: String
}, { collection: 'userDataOfCustomers' })
//require('../schema/customerSchema');
const uri = "mongodb+srv://hotelUser:KFD7cusZGT6rVGV12@cluster0.13bcs.mongodb.net/loginData?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

router.post('/', urlParser, function (req, res, next) {
    console.log(req.body);
    // alert(req.query);
    // res.send("this is the data entry point")
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const dataBase = mongoose.connection;
    console.log("database connected!!");
    dataBase.on('error', console.error.bind(console, 'connection error:'));
    dataBase.once('open', function () {
        console.log("got the connection");
        const customer = mongoose.model('userDataOfCustomers', custSchema);
        const user = new customer(req.body);
        user.save((err, user) => {
            console.log("data saved")
        });
    });
    res.send("hello there");
});

module.exports = router;
