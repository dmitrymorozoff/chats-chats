const express = require("express");
const router = express.Router();
const { getUser } = require("../services/userService.js");
const { INTERNAL_SERVER_ERROR } = require("../errors/errorsType");

router.get("/user", async (req, res, next) => {
    const { username } = req.query;
    let user;
    try {
        user = await getUser({ username });
    } catch ({ message }) {
        return next({
            message,
            ...INTERNAL_SERVER_ERROR,
        });
    }
    return res.json(user);
});

module.exports = router;
