const router = require('express').Router();
const { Question } = require('../db/models')


router.get('/', async (req, res) => {
  try {
    const questions = await Question.findAll();
    console.log('questions', questions);
    res.json(questions)
    
  } catch (error) {
    console.log(error)
  }

})


module.exports = router;
