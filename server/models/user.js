const mongoose = require("mongoose");
const bcrypc = require("bcryptjs");

const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

UserSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        return next();
    }
    const salt = await bcrypc.genSalt(10);
    const hash = await bcrypc.hash(this.password, salt);
    this.password = hash;
    next();
});

UserSchema.methods.comparePasswords = function(password) {
    return bcrypc.compare(password, this.password);
};

const User = (module.exports = mongoose.model("User", UserSchema));
