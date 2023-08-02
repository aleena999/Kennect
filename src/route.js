const express = require('express')
const router = express.Router();
const validation = require('./validation');
const controller = require('./controller');

router.get('/calender_questions',(req, res, next) => {
    const { error } = validation.calenderQuestionsSchema.validate(req.body);
  if (error) {
    // Return a 400 Bad Request response with the validation error message
    return res.status(400).json({ error: error.details[0].message });
  }
  // If validation passes, proceed to the controller
  controller.getDate(req, res, next);
});

module.exports = router