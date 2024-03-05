"use strict";
const gemini_1 = require("./gemini");
const user_1 = require("./user");
const vc_1 = require("./vc");
const exp = require('express');
const router = exp.Router();
// Tesing Routes ==>
router.get("/", (req, res) => {
    res.json("On /api/v1");
});
router.use('/user', user_1.userRoute);
router.use('/gemini', gemini_1.gem);
router.use('/vc', vc_1.vc);
module.exports = router;
