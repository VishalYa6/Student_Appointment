const express = require('express');
const { addAvailability, getAvailability } = require('../controllers/availabilityController');
const router = express.Router();
const { authenticate } = require('../middleware/authMiddleware');

router.post('/', authenticate, addAvailability);
router.get('/:professorId', authenticate, getAvailability);

module.exports = router;
