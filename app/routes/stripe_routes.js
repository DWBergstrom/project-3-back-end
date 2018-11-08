const express = require('express')
const app = require('express')()
const keyPublishable = process.env.PUBLISHABLE_KEY
const keySecret = process.env.SECRET_KEY
const passport = require('passport')
const handle = require('../../lib/error_handler')
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireToken = passport.authenticate('bearer', { session: false })
const stripe = require('stripe')(keySecret)
const router = express.Router()

app.set('view-engine', 'pug')
app.use(require('body-parser').urlencoded({extended: false}))

router.get('/stripe', requireToken, (req, res) => {
  res.render('index.pug', {keyPublishable})
    .then(handle404)
    .then(stripe => {
      res.status(200).json({ stripe })
    })
    .catch(err => handle(err, res))
})

router.post('/charges', (req, res) => {
  console.log('request body is ', req.body)
  let amount

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
    .then(customer =>
      stripe.charges.create({
        amount,
        description: 'Sample Charge',
        currency: 'usd',
        customer: customer.id
      }))
    .then(charge => res.render('charge.pug'))
})

module.exports = router
