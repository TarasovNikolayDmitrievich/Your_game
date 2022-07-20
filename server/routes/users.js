const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const saltRounds = 10;

router.post('/regist', async (req, res) => {

  const { name, email, password } = req.body;

  try {
    const hashedPass = await bcrypt.hash(password, saltRounds);
    const [newUser, created] = await User.findOrCreate({
      where: { email },
      defaults: { name ,email, password: hashedPass },
    });

    if (!created) {
      return res.sendStatus(500);
    }

    req.session.userName = newUser.name;
    req.session.userId = newUser.id;
    res.status(200).json(newUser)
    
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }

})

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if(!email) {
    return res.status(200).json({ userName: null, userId: null, scope: 0 })
  }

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.sendStatus(401);
    }
    const isValidPass = bcrypt.compare(password, user.password);
    if (!isValidPass) {
      return res.sendStatus(401);
    }
    req.session.userName = user.name;
    req.session.userId = user.id;

    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie(process.env.COOKIE_NAME);
  res.sendStatus(200)
});

router.get('/setuser',  (req, res) => {
  return res.status(200).json({id: req.session.userId, name: req.session.userName} );
});

module.exports = router;
