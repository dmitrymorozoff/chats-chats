const express = require("express");
const router = express.Router();
const { getUserByToken } = require("../services/profileService");

router.get("/profile", async (req, res, next) => {
    const { token } = req;
    let user;
    try {
        user = await getUserByToken(token);
        console.log(user);
    } catch ({ message }) {
        return next({
            message,
            status: 500,
        });
    }
    return res.json(user);
});

module.exports = router;
