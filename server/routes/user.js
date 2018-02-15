const express = require("express");
const router = express.Router();
const { getUser } = require("../services/userService.js");

router.get("/user", async (req, res, next) => {
    const { username } = req.query;
    let user;
    try {
        user = await getUser({ username });
    } catch ({ message }) {
        return next({
            message,
            status: 500,
        });
    }
    return res.json(user);
});

module.exports = router;
