const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const userControllers = require("../controllers/user.js");

router
    .route("/signup")
    .get(userControllers.signupRenderForm)
    .post(wrapAsync(userControllers.signupUser));


router
    .route("/login")
    .get(userControllers.loginRenderForm)
    .post(
        saveRedirectUrl,
        passport.authenticate("local",{
        failureRedirect: '/login' , 
        failureFlash:true}),
        userControllers.login
    );

router.get("/logout",userControllers.logout);

module.exports = router;