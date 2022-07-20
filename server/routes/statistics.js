const router = require('express').Router();
const { Statistic, User } = require('../db/models')


router.get('/', async (req, res) => {
  try {
    const stat = await Statistic.findAll({
      include: {
        model: User
      }
    });
    
    res.json(stat)

  } catch (error) {
    console.log(error)
  }

})

router.post('/stop', async (req, res) => {
  const { userId, scope } = req.body
  try {
    Statistic.create({ userId, score: scope });
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
  }

})

module.exports = router;
