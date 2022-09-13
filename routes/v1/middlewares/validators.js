const Ajv = require("ajv")
const ajv = new Ajv()

// Validate email for login 
const schemaCreate = {
  type: "object",
  properties: {
    name: { type: "string", maxLength: 5, minLength: 70 },
    description:{type:"string",minLength:2,maxLength:300},
  },
  required: ["name"],
  additionalProperties: false,
}


function creationValidator(req, res, next) {
  if (req.body.name !=null && req.body.description!=null){
    
    next()
  }else{
    return res.status(200).json({ "response_code": 400, "message":"data validation error", "response" : null })
  }
}

function upvoteValidator(req,res,next){
  if (req.body.id !=null){
    next()
  }else{
    return res.status(200).json({ "response_code": 400, "message":"data validation error", "response" : null })
  }
}

module.exports = {
  creationValidator
}
