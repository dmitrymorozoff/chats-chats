const User = require("../models/user");
const { getLastMessageFromContact } = require("./messageService");
const moment = require("moment");

async function getUser({ username }) {
    let user;
    try {
        user = await User.findOne({ username });
        if (!user) {
            return {
                message: `user not found`,
                status: 400,
            };
        }
    } catch ({ message }) {
        return {
            message,
            status: 500,
        };
    }
    return user;
}

async function addContact({ toUsername, _id, username }) {
    let data;
    console.log(username);

    try {
        data = await User.update(
            { username: toUsername },
            { $push: { contacts: { username, _id } } },
        );
        if (data.ok) {
            return {
                status: 200,
                message: "contact was successfully added",
            };
        }
    } catch ({ message }) {
        return {
            message,
            status: 500,
        };
    }
}

async function getContacts({ username }) {
    const user = await getUser({ username });
    let contacts = [];
    for (const contact of user.contacts) {
        let { username, _id } = contact;
        let { message: lastMessage, date } = await getLastMessageFromContact(
            username,
        );
        contacts.push({
            username,
            _id,
            lastMessage,
            date: moment().format("HH:mm"),
        });
    }
    return contacts;
}

module.exports = { getContacts, getUser, addContact };
