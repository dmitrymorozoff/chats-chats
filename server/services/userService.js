const User = require("../models/user");

module.exports = async function getUserByToken(token) {
    const { _id } = token;
    let user;
    try {
        user = await User.findOne(
            {
                _id,
            },
            { password: 0, __v: 0 },
        );
    } catch (error) {}
    return user;
};
