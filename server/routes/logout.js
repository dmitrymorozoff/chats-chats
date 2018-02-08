const express = require("express");
const router = express.Router();

router.get("/logout", async (req, res, next) => {
    req.logout();
    res.send({
        message: "you have successfully logged out!",
        status: 200,
    });
    res.redirect("/");
});

module.exports = router;
