// if (process.env.NODE_ENV === "development") {
//     require("import-export");
//     require("babel-core/register")({
//         presets: ["es2015", "react", "stage-2"],
//     });
//     require.extensions[".scss"] = () => {
//         return;
//     };
//}
const express = require("express");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const expressValidator = require("express-validator");
const path = require("path");
const fs = require("fs");
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
const react = require("react");
const renderToString = require("react-dom/server").renderToString;
const reactRouter = require("react-router");
const match = reactRouter.match;
const routerContext = reactRouter.RouterContext;

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

app.use(express.static(path.join(__dirname, "../public")));

// const staticFiles = [
//     "/static/*",
//     "/logo.svg",
//     "/asset-manifest.json",
//     "/favicon.ico",
// ];
// const routes = require("../src/services/routes/index.js").default();
// staticFiles.forEach(file => {
//     app.get(file, (req, res) => {
//         const filePath = path.join(__dirname, "../public", req.url);
//         res.sendFile(filePath);
//     });
// });
// process.env.NODE_ENV = "development";
// app.get("*", (req, res, next) => {
//     const htmlFilePath = path.join(__dirname, "../public", "index.html");
//     fs.readFile(htmlFilePath, "utf8", (error, htmlData) => {
//         if (error) {
//             return next(error);
//         }
//         match({ routes, location: req.url }, (error, redirect, ssrData) => {
//             if (error) {
//                 return next(error);
//             }
//             if (ssrData) {
//                 const ReactApp = renderToString(
//                     react.createElement(RouterContext, ssrData),
//                 );
//                 const RenderApp = htmlData.replace("{{SSR}}", ReactApp);
//                 res.status(200).send(RenderApp);
//             }
//         });
//     });
// });

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
