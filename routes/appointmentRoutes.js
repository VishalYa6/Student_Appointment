const express = require('express');
const { bookAppointment, cancelAppointment } = require('../controllers/appointmentController');
const router = express.Router();
const { authenticate } = require('../middleware/authMiddleware');

router.post('/', authenticate, bookAppointment);
router.delete('/:appointmentId', authenticate, cancelAppointment);

module.exports = router;
