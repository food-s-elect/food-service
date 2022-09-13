const food = require('./../models/food')
const user = require('./../models/user')






function createFood(req,res,next){
 var newfood =new  food({
    name:req.body.name,
    description:req.body.description,
 })
 newfood
 .save()
 .then((data) => {
   next();
 })
 .catch((err) => {
   if (err.name == "ValidationError") {
     return res
       .status(200)
       .json({
         response_code: 400,
         message: "Data validation error",
         response: null,
       });
   } else {
     console.log(err);
     return res
       .status(200)
       .json({
         response_code: 500,
         message:"Internal server error",
         response: null,
       });
   }
 });
}

function upvote(req,res,next){
    food.findOne({"_id":req.body.id}).then((foo)=>{
      if(foo==null){
        return res.status(200).json({
          "response_code":404,
          "message":"No food found",
          "response":null
        });
      }
    else{
        user.findOne({"_id":req.user_id}).then((user_found)=>{
          
            user_found.voted = foo._id
            food.updateOne(
              { _id: foo._id }, 
              { $addToSet: { votes:  req.user_id} },
            )
        })

    }
  })
}

module.exports = {
    createFood,
    upvote
}