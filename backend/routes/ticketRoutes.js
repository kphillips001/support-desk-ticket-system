const express = require('express');
const router = express.Router();
const { getTickets, createTicket } = require('../controllers/ticketController');

const { protect } = require('../middleware/authMiddleware');

// Can chain routers with router.route
// Protected route
router.route('/').get(protect, getTickets).post(protect, createTicket);

module.exports = router;
