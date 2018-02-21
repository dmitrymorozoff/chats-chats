const Message = require("../models/message");
const {
    MESSAGE_NOT_FOUND,
    INTERNAL_SERVER_ERROR,
} = require("../errors/errorsType");

async function getLastMessageByUsername(username) {
    let message;
    try {
        message = await Message.findOne({ fromUsername: username });
        if (!message) {
            return MESSAGE_NOT_FOUND;
        }
    } catch ({ message }) {
        return {
            message,
            ...INTERNAL_SERVER_ERROR,
        };
    }
    return message;
}

async function getMessagesByUsername({
    fromUsername,
    toUsername,
    count = 5,
    skip = 0,
}) {
    let messages;
    try {
        messages = await Message.find({ fromUsername, toUsername }, { __v: 0 })
            .limit(parseInt(count, 10))
            .skip(parseInt(skip, 10));
        if (!messages) {
            return {
                messages: `messages not found`,
                status: 400,
            };
        }
    } catch ({ message }) {
        return {
            message,
            ...INTERNAL_SERVER_ERROR,
        };
    }
    return messages;
}

module.exports = { getLastMessageByUsername, getMessagesByUsername };
