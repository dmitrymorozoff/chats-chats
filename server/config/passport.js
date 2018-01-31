const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");
const bcrypc = require("bcryptjs");

module.exports = passport => {
    passport.use(
        new LocalStrategy((username, password, done) => {
            let query = { username };
            User.findOne(query, (error, user) => {
                if (error) {
                    throw error;
                }
                if (!user) {
                    return done(null, false, { message: "no user found" });
                }
                bcrypc.compare(password, user.password, (error, isMatch) => {
                    if (error) {
                        throw error;
                    }
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: "wrong password" });
                    }
                });
            });
        }),
    );
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, function(error, user) {
            done(error, user);
        });
    });
};
