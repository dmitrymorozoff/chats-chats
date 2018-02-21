const MESSAGE_NOT_FOUND = { message: "Message not found!", status: 400 };
const BAD_CREDENTIALS = { message: "Bad credentials!", status: 400 };
const INTERNAL_SERVER_ERROR = {
    message: "Internal server error!",
    status: 500,
};
const BAD_REQUEST = {
    message: "Bad request!",
    status: 400,
};

module.exports = {
    MESSAGE_NOT_FOUND,
    INTERNAL_SERVER_ERROR,
    BAD_CREDENTIALS,
    BAD_REQUEST,
};
