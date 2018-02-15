const User = require("../models/user");

async function getUserByToken({ _id }) {
    let user;
    try {
        user = await User.findOne({ _id }, { password: 0, __v: 0 });
    } catch (error) {
        return {
            message: `get user by token finished with error`,
            status: 500,
        };
    }
    return user;
}

module.exports = { getUserByToken };
