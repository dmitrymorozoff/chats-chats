const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");

router.post("/registration", (req, res) => {
    const { firstname, email, username, password, confirmpassword } = req.body;
    let newUser = new User({
        firstname,
        email,
        username,
        password,
    });

    bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(newUser.password, salt, (error, hash) => {
            if (error) {
                console.log(`error in hash bcrypt ${error}`);
            }
            newUser.password = hash;
            newUser.save(error => {
                if (error) {
                    console.log(`error in new user save ${error}`);
                    return;
                } else {
                    req.flash("success", "your registration is successful");
                }
            });
        });
    });
});

module.exports = router;
