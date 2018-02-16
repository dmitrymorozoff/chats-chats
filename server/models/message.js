const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
    fromUsername: {
        type: String,
        required: true,
    }
    toUsername: {
        type: String,
        required: true,
    }
    message: {
        type: String,
        required: true,
    },
});

const Message = (module.exports = mongoose.model("Message", MessageSchema));
