"use strict";
const gemini_1 = require("./gemini");
const user_1 = require("./user");
const exp = require('express');
const router = exp.Router();
// Tesing Routes ==>
router.get("/", (req, res) => {
    res.json("On /api/v1");
});
router.use('/user', user_1.userRoute);
router.use('/gemini', gemini_1.gem);
module.exports = router;
