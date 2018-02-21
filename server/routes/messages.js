const express = require("express");
const router = express.Router();
const { getMessagesByUsername } = require("../services/messageService");
const { INTERNAL_SERVER_ERROR } = require("../errors/errorsType");

router.get("/messages", async (req, res, next) => {
    const {
        from: fromUsername,
        to: toUsername,
        count = 5,
        skip = 0,
    } = req.query;
    try {
        const messages = await getMessagesByUsername({
            fromUsername,
            toUsername,
            count,
            skip,
        });
        return res.json(messages);
    } catch ({ message }) {
        return next({
            message,
            ...INTERNAL_SERVER_ERROR,
        });
    }
});

module.exports = router;
