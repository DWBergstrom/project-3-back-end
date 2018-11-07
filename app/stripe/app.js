const keyPublishable = process.env.PUBLISHABLE_KEY
const keySecret = process.env.SECRET_KEY

const app = require('express')()
const stripe = require('stripe')(keySecret)

app.set('view engine', 'pug')
app.use(require('body-parser').urlencoded({extended: false}))

app.get('/stripe', (req, res) =>
  res.render('index.pug', {keyPublishable}))

app.post('/charges', (req, res) => {
  let amount = 500

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

app.listen(7165)

module.exports = app
