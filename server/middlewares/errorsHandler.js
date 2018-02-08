const errorsHandler = function(error, req, res, next) {
    let { status = 500, message = "server error" } = error;
    return res.status(status).json({ message });
};

module.exports = errorsHandler;
