function ioConnection(server) {
    const io = require("socket.io").listen(server);

    io.on("connection", socket => {
        console.log("a user connected");
        socket.on("disconnect", socket => {
            console.log(`user ${socket.username} disconnected`);
        });
        socket.on("join", ({ username, _id }) => {
            console.log(`user ${username} was joined `);
            socket.username = username;
        });
        socket.on(
            "private-message",
            ({ message, toUsername }, req, res, next) => {
                console.log(`recieve message: ${message}`);
                const fromUsername = socket.username;
                try {
                    let newMessage = new Message({
                        fromUsername,
                        toUsername,
                        message,
                    });
                    console.log(`successfully stored message : ${newMessage}`);
                    io.emit("private-message", newMessage);
                } catch ({ message }) {
                    next({
                        message,
                        status: 400,
                    });
                }
            },
        );
    });
    return io;
}

module.exports = ioConnection;
