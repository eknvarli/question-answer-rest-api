const express = require('express');
const { signup } = require('../controllers/authController');
const router = express.Router();

// Router
router.post('/signup', signup);


// Export
module.exports = router;