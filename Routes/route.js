const express = require("express");
const router = express.Router();
const { generateImage } = require("../Controllers/generateImage");

//Router passing the request to Controller method
router.post("/generateImage", generateImage);
module.exports = router;
