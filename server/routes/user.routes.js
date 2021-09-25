var verifytoken = require("../verifitoken");
const UserCtrl = require("../controllers/user.controller.js");
var router = require("express").Router();

module.exports =(app)=> {
    router.post("/register",UserCtrl.register)

    app.use("/api/", router);
}
