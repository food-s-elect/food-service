const Ajv = require("ajv")
const ajv = new Ajv()

// Validate email for login 
const schemaCreate = {
  type: "object",
  properties: {
    name: { type: "string", maxLength: 5, minLength: 70 },
    description:{type:"string",minLength:2,maxLength:300},
    
  },
  required: ["phone","country_code"],
  additionalProperties: false,
}


const validatePhone = ajv.compile(schemaLogin)
function loginValidator(req, res, next) {
  console.log(req.body)
  const valid = validatePhone(req.body)
  if (!valid) {
    return res.status(200).json({ "response_code": 400, "message":"data validation error", "response" : null })
  } else {
    next();
  }
}
