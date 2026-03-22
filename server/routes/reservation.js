const express = require("express");
const router = express.Router({ mergeParams: true });
console.log("RESERVATION ROUTER LOADED");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reservationSchema } = require("../schema.js");
const Reservation = require("../models/reservation.js");
const Listing = require("../models/listing.js");

const validateReservation = (req, res, next) => {
    let { error } = reservationSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to create a reservation!");
        return res.redirect("/login");
    }
    next();
};

router.post("/", (req, res, next) => { console.log("HIT RESERVATION POST"); next(); }, isLoggedIn, validateReservation, wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReservation = new Reservation(req.body.reservation);
    newReservation.user = req.user._id;
    newReservation.listing = listing._id;
    
    await newReservation.save();
    
    req.flash("success", "New Reservation Created!");
    res.redirect(`/listings/${listing._id}`);
}));

module.exports = router;
