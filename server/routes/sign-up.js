const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");

router.post("/sign-up", (req, res) => {
    const { firstname, email, username, password, confirmPassword } = req.body;
    req.check("email", "invalid email address").isEmail();
    req.check("firstname", "firstname is empty").notEmpty();
    req.check("username", "username is empty").notEmpty();
    req
        .check("password", "password is invalid")
        .isLength({ min: 4 })
        .equals(req.body.confirmPassword);
    const errors = req.validationErrors();
    if (errors) {
        req.session.errors = errors;
        res.send({
            type: "sign-up",
            status: `error`,
        });
        console.log(`errors in registration`);
    } else {
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
                newUser.save((error, user) => {
                    if (error) {
                        console.log(`error in new user save ${error}`);
                        return;
                    } else {
                        res.send({
                            type: "sign-up",
                            status: "success",
                            user: {
                                firstname,
                                email,
                                username,
                            },
                        });
                        console.log(
                            "success",
                            `your registration is successful ${user}`,
                        );
                    }
                });
            });
        });
    }
});

module.exports = router;
