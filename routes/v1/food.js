const redis = require("./../../services/redis");

const express = require("express");
var router = express.Router();
const { createToken,validateToken } = require("./middlewares/token");
const { creationValidator } = require("./middlewares/validators");
const {  uploadMultiple } = require("./middlewares/upload");
const { createFood, upvote } = require("./middlewares/food");



router.post("/create",creationValidator,createFood, async (req, res) => {
    console.log(req.body)
    res.status(200).json({response_code:200,message:"Successfully created food",response:null})
});
  
router.post("/vote",validateToken,upvote,(req,res)=>{

})



module.exports = router;