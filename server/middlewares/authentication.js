const jwt = require("jsonwebtoken");
const config = require("../config/index");

const checkAuthentification = function(req, res, next) {
    const token = req.headers["authorization"];
    if (!token) {
        return res.json({
            message: "forbidden. no token!",
            status: 403,
        });
    }
    let tocketObg;
    try {
        tocketObg = jwt.verify(token, config.secret);
    } catch ({ message }) {
        return res.json({
            message,
            status: 400,
        });
    }
    console.log("token is auth", tocketObg);
    req.token = tocketObg;
    next();
};

module.exports = checkAuthentification;
