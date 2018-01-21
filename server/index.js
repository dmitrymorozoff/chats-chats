const express = require("express");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;
const indexRouter = require("./routes/index.js");
const registrationRouter = require("./routes/registration.js");
const bluebird = require("bluebird");
const config = require("./config/index.js");

mongoose.Promise = bluebird;
mongoose
    .connect(config.database.name)
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(error => {
        console.log(`error in mongodb ${error}`);
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: config.secret,
    }),
);

app.use("/", indexRouter);
app.use("/", registrationRouter);

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
