const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config/index");

router.post("/sign-in", async (req, res, next) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return next({
            status: 400,
            message: "user not found",
        });
    }
    try {
        const result = user.comparePasswords(password);
    } catch (error) {
        return next({
            status: 400,
            message: "bad credentials",
        });
    }
    req.session.userId = user._id;
    const token = jwt.sign({ _id: user._id }, config.secret);
    user.password = undefined;
    user.__v = undefined;
    res.json({ token, status: 200, user });
});

module.exports = router;
