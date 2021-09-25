const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
var jwt = require("jsonwebtoken");
var configFile = require("../config/jwt_config");
const { Router } = require("express");
const dbConfig = require("../config/db.config.js");
var mysqlQuery = require("../dbConnection.js");
const MD5 = require("md5");
const validator = require("validator");
const { identity } = require("underscore");
var QRCode = require("qrcode");
var speakeasy = require("speakeasy");
var bcrypt = require("bcryptjs");
//const sendEmail = require("../utils/sendEmail");
// const sendEmail = require("../utils/sendVerificationEmailCode");
// const sendContactEmail = require("../utils/ContactUsMail");
const referralCodeGenerator = require("referral-code-generator");
const axios = require("axios");
// const fetch = require("node-fetch");
var unirest = require("unirest");
const md5 = require("md5");

async function myData(req, msg) {
	mysqlConnect = mysqlConnect || (await createPoolAndEnsureSchema());
	var mysqlQuery = util.promisify(mysqlConnect.query).bind(mysqlConnect);
  var userId = req;
  var message = msg;
  let EventList =
    "INSERT INTO event_history (userid, event) VALUES (" +
    userId +
    ",'" +
    message +
    "')";
  let findData2 = await mysqlQuery(EventList);
}

exports.register = async (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var Password = req.body.password;
  var CPassword = req.body.confirmPassword;

  console.log(name);
  console.log(email);
  console.log(Password);
  console.log(CPassword);

  var regex = "^[a-zA-Z0-9_]*$";
  if (req.body.password.match(regex)) {
    res.send({
      status: false,
      message:
        "Password should contain characters, number and special character.",
      data: {},
    });
    return;
  }

  if (req.body.confirmPassword.match(regex)) {
    res.send({
      status: false,
      message:
        "Password should contain characters, number and special character.",
      data: {},
    });
    return;
  }

  let RegisterData =
    "INSERT INTO users (nickname ,email, password, c_password, userType) VALUES ('" +
    name +
    "','" +
    email +
    "','" +
    MD5(Password) +
    "','" +
    MD5(CPassword) +
    "','USER')";
  let findData = await mysqlQuery(RegisterData);

  return res.send({
    status: true,
    message: "Congrats, You have been Registered successfully",
    findData,
  });
};
