const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      // each ticket needs to be associated with a user
      // This will relate to user's object id
      required: true,
      // need to reference User collection
      ref: 'User',
    },
    // Each ticket will be asssociated with a specific product
    product: {
      type: String,
      required: [true, 'Please select a product'],
      // specific products that tickets can be selected for
      enum: ['iPhone', 'Macbook Pro', 'iMac', 'iPad'],
    },
    description: {
      type: String,
      required: [true, 'Please enter a description of the issue'],
    },
    status: {
      type: String,
      required: true,
      enum: ['new', 'open', 'closed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Ticket', ticketSchema);
