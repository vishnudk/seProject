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

    console.log(
        {
            "userId": req.body.userId,
            "passWord": req.body.passWord
        }
    );
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const dataBase = mongoose.connection;
    dataBase.on('error', console.error.bind(console, 'connection error:'));
    dataBase.once('open', function () {
        console.log("database connected");
        const customer = mongoose.model('userDataOfCustomers', custSchema);

        customer.find({ "userId": req.body.userId, "passWord": req.body.passWord }, (err, data) => {
            if (err) {
                // res.send(err);
                console.log(err);
            }
            else {

                if (data.length != 0) {
                    console.log(data);
                    console.log("got data from the database!!");
                    res.send(true);
                    // res.redirect("/homePage");
                }
                else {
                    console.log("no such data exists");
                    res.send(false);
                }
                // res.send(data);
            }
        });
    });
});

module.exports = router;
