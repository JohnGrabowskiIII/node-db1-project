
const {getById} = require("./accounts-model")

const payloadValidityHelper = (req) => {

  const {body} = req;
  let {name, budget} = body;
  name = name.trim();

  const doNameAndBudgetExist = name && budget;
  const isNameString = typeof name === 'string';
  const isNameValidLength = name.length >= 3 && name.length <= 100; 
  const isBudgetNumber = typeof budget === 'number';
  const isBudgetInRange = budget >= 0 && budget <= 1000000;

  if (!doNameAndBudgetExist) return "Non-existant"
  if (!isNameString) return "TypeError Name"
  if (!isNameValidLength) return "Invalid Name Length"
  if (!isBudgetNumber) return "TypeError Budget"
  if (!isBudgetInRange) return "Out of Range"

  return "Valid";

}

exports.checkAccountPayload = (req, res, next) => {
  
  switch (payloadValidityHelper(req)) {
    case "Non-existant":
      res.status(400).json({message: "name and budget are required"});
      break;
    case "TypeError Name":
      res.status(400).json({message: "name of account must be a string"});
      break;
    case "Invalid Name Length":
      res.status(400).json({message: "name of account must be between 3 and 100"});
      break;
    case "TypeError Budget":
      res.status(400).json({message: "budget of account must be a number"});
      break;
    case "Out of Range":
      res.status(400).json({message: "budget of account is too large or too small"});
      break;
    case "Valid":
      next();
      break;
    default:
      res.status(500).json({message: "Unable to handle request at this time"});
      break;
  }
  
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
}
