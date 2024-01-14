const express = require("express");
const router = express.Router();
const {Showhistory} =require("../Controller/history")
const { submitContactForm } = require("../Controller/mail");
router.post("/send", submitContactForm);
router.get("/history",Showhistory)

module.exports = router;
