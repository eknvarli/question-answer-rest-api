const express = require('express');
const { getAllQuestions } = require('../controllers/questionController');
const router = express.Router();

// Router
router.get('/', getAllQuestions);


// Export
module.exports = router;