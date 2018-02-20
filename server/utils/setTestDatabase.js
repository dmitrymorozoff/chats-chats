const mongoose = require("mongoose");
const User = require("../models/user");
const Message = require("../models/message");

async function setUsers() {
    await User.create({
        _id: "5a8c1d21e3ea440648211e1c",
        firstname: "dmitry",
        email: "dima@yandex.ru",
        username: "dimon",
        password: "123456",
        contacts: [
            {
                _id: "1",
                username: "oleja",
            },
            {
                _id: "2",
                username: "feduk",
            },
        ],
    });
    await User.create({
        firstname: "oleg",
        email: "oleg@yandex.ru",
        username: "oleja",
        password: "765421",
        contacts: [],
    });
    await User.create({
        firstname: "fedor",
        email: "fedor@yandex.ru",
        username: "feduk",
        password: "111111",
        contacts: [],
    });
}

async function setMessages() {
    await Message.create({
        fromUsername: "oleja",
        toUsername: "dimon",
        message:
            "The best way to get someone’s attention in a chat room is to @mention them. When you @mention someone in a chat room, similar to tasks, they will be sent an in-app notification, as well as a desktop notification if they have them enabled. ",
    });
    await Message.create({
        fromUsername: "oleja",
        toUsername: "dimon",
        message:
            "@Mentioning teammates ensures that they see your message and, most importantly, know that it’s meant for them to see. You can @mention single users or multiple users at a time.",
    });
    await Message.create({
        fromUsername: "feduk",
        toUsername: "dimon",
        message:
            "You can also get the attention of the whole room by @mentioning “everyone.” Doing so sends everyone in the room a notification, making it extremely useful for company/organization announcements, reminders, and much more. ",
    });
}

module.exports = async function setTestDatabase() {
    await mongoose.connection.dropDatabase();
    setUsers();
    setMessages();
    console.log("test dataset has been successfully added");
};
