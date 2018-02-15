const express = require("express");
const router = express.Router();
const { getContacts, addContact } = require("../services/userService");
const User = require("../models/user");

router.get("/contacts", async (req, res, next) => {
    const { username, _id } = req.query;
    let contacts;
    try {
        contacts = await getContacts({ username });
    } catch ({ message }) {
        return next({
            message,
            status: 500,
        });
    }
    return res.json(contacts);
});

router.put("/contacts/:username", async (req, res, next) => {
    const toUsername = req.params.username;
    const { username, _id } = req.body;
    let data;
    try {
        data = await addContact({ toUsername, username, _id });
    } catch ({ message }) {
        return next({
            message,
            status: 500,
        });
    }
    return res.json(data);
});

module.exports = router;
