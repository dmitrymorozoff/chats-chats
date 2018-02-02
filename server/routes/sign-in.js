const express = require("express");
const router = express.Router();
const passport = require("passport");

router.post("/sign-in", (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/sign-in",
    })(req, res, next);
});

module.exports = router;
