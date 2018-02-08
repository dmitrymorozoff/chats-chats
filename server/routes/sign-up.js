const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");

router.post("/sign-up", async (req, res, next) => {
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
        next(errors);
        console.log(`errors in registration ${errors}`);
    } else {
        let newUser;
        try {
            newUser = new User({
                firstname,
                email,
                username,
                password,
            });
        } catch ({ message }) {
            next({
                message,
                status: 400,
            });
        }
        res.json(newUser);
    }
});

module.exports = router;
