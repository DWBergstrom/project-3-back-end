const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
  total: {
    type: Number,
    required: true
  },
  purchased: {
    type: Boolean,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)
