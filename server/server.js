const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
    response.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/hello", (req, res) => {
    res.send({ data: "Hello From Express" });
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
