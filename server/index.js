const express = require("express");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const expressValidator = require("express-validator");
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;
const indexRouter = require("./routes/index.js");
const singUpRouter = require("./routes/sign-up.js");
const signInRouter = require("./routes/sign-in.js");
const logoutRouter = require("./routes/logout.js");
const userRouter = require("./routes/user.js");
const bluebird = require("bluebird");
const config = require("./config/index.js");
const cors = require("cors");
const errorsHandler = require("./middlewares/errorsHandler.js");
const checkAuthentitification = require("./middlewares/authentication.js");

mongoose.Promise = bluebird;
mongoose
    .connect(config.database.name)
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(error => {
        console.log(`error in mongodb ${error}`);
    });
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

app.use(express.static(path.join(__dirname, "public")));
app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: config.secret,
    }),
);

app.use("/", indexRouter);
app.use("/", singUpRouter);
app.use("/", signInRouter);
app.use("/", logoutRouter);
app.use("/", checkAuthentitification, userRouter);
app.use("/test", checkAuthentitification, (req, res) => {
    res.json({
        test: "test",
    });
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
app.use(errorsHandler);
