const express = require("express");
const router = express.Router();
const {
    getContactsByUsername,
    addContact,
} = require("../services/userService");
const { INTERNAL_SERVER_ERROR } = require("../errors/errorsType");
const User = require("../models/user");

router.get("/contacts", async (req, res, next) => {
    const { username, _id } = req.query;
    try {
        const contacts = await getContactsByUsername({ username });
        return res.json(contacts);
    } catch ({ message }) {
        return next({
            message,
            ...INTERNAL_SERVER_ERROR,
        });
    }
});

router.put("/contacts/:username", async (req, res, next) => {
    const toUsername = req.params.username;
    const { username, _id } = req.body;
    try {
        const data = await addContact({ toUsername, username, _id });
        return res.json(data);
    } catch ({ message }) {
        return next({
            message,
            ...INTERNAL_SERVER_ERROR,
        });
    }
});

module.exports = router;
