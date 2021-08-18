const router = require('express').Router()

const {getAllAccounts} = require('./accounts-middleware')

router.get('/', getAllAccounts, (req, res, next) => {

  const {accounts} = req

  res.status(200).json(accounts)
})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
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
