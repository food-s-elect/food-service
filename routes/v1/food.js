const redis = require("./../../services/redis");

const express = require("express");
var router = express.Router();
const { createToken,validateToken } = require("./middlewares/token");

router.post("/create", validateToken, async (req, res) => {
    res.status(200).json({response_code:200,message:"Otp sent to your phone",response:null})
});
  



module.exports = router;