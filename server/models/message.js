const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
    body: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
});

const Message = (module.exports = mongoose.model("Message", MessageSchema));
