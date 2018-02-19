const Message = require("../models/message");

async function getLastMessageFromContact(username) {
    let message;
    try {
        message = await Message.findOne({ fromUsername: username });
        if (!message) {
            return {
                message: `message not found`,
                status: 400,
            };
        }
    } catch ({ message }) {
        return {
            message,
            status: 500,
        };
    }
    return message;
}

module.exports = { getLastMessageFromContact };
