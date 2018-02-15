const mongoose = require("mongoose");
const User = require("../models/user");

module.exports = async function setTestDatabase() {
    await mongoose.connection.dropDatabase();
    await User.create({
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
    console.log("test dataset has been successfully added");
};
