const express = require('express')
const app = require('express')()
const dotenv = require('dotenv')
dotenv.config()
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

  // console.log('req email is ', req.body.email)
  // console.log('req token is ', req.body.source[0])

  const stripeEmail = req.body.email
  const amount = req.body.amount
  const stripeToken = req.body.source.id
  const nlStripeCard = req.body.source.card.id
  const stripeCard = nlStripeCard.replace(/\n$/, '')

  console.log('req card id is ', stripeCard)
  // console.log('keySecret is ', keySecret)

  stripe.customers.create({
    email: stripeEmail,
    source: stripeToken
  })
    .then(customer => {
      let customerId = customer.id
      console.log(customerId)
      return customerId
    })
    .then(customerId =>
      stripe.charges.create({
        amount: amount,
        description: 'Sample Charge',
        currency: 'usd',
        customer: customerId
      }))
    .then(charge => {
      console.log(charge)
      // res.render('charge.pug')
    })
    .catch(console.error)
})

module.exports = router
