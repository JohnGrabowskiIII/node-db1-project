const router = require('express').Router();

const {getAllAccounts, checkAccountId, checkAccountPayload} = require('./accounts-middleware');

const {create} = require("./accounts-model")

router.get('/', getAllAccounts, (req, res, next) => {

  const {accounts} = req

  res.status(200).json(accounts)

})

router.get('/:id', checkAccountId, (req, res, next) => {

  const {account} = req;

  res.status(200).json(account);

})

router.post('/', checkAccountPayload, async (req, res, next) => {
  
  const {body} = req;

  console.log('in post')

  try {
    const newAccount = await create(body);
    res.status(201).json(newAccount);
  } catch(err) {
    console.log('in catch', body)
    res.status(500).json({message: "Unable to handle request at this time"})
  }

})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
