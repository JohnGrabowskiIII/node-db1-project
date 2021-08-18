const router = require('express').Router();

const {getAllAccounts, checkAccountId, checkAccountPayload, checkAccountNameUnique} = require('./accounts-middleware');

const {create, updateById, deleteById} = require("./accounts-model")

router.get('/', getAllAccounts, (req, res, next) => {

  const {accounts} = req

  res.status(200).json(accounts)

})

router.get('/:id', checkAccountId, (req, res, next) => {

  const {account} = req;

  res.status(200).json(account);

})

router.post('/', checkAccountNameUnique, checkAccountPayload, async (req, res, next) => {
  
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

router.put('/:id', checkAccountId, checkAccountPayload, async (req, res, next) => {

  const {id} = req.params;
  const {body} = req;

  try {
    const updatedAccount = await updateById(id, body);
    res.status(200).json(updatedAccount)
  } catch(err) {
    res.status(500).json({message: "Unable to handle request at this time"})
  }

});

router.delete('/:id', checkAccountId, async (req, res, next) => {

  const {id} = req.params;

  try {
    const deletedAccount = await deleteById(id)
    res.status(200).json(deletedAccount)
  } catch(err) {
    res.status(500).json({message: "Unable to handle request at this time"})
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
