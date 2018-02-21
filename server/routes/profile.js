const express = require("express");
const router = express.Router();
const { getUserByToken } = require("../services/profileService");
const { INTERNAL_SERVER_ERROR } = require("../errors/errorsType");

router.get("/profile", async (req, res, next) => {
    const { token } = req;
    try {
        const user = await getUserByToken(token);
        return res.json(user);
    } catch ({ message }) {
        return next({
            message,
            ...INTERNAL_SERVER_ERROR,
        });
    }
});

module.exports = router;
