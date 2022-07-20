require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const session = require('express-session');
const sessionConfig = require('./sessionConfig');
const questions = require('./routes/questions');
const statistics = require('./routes/statistics');
const users = require('./routes/users');

const app = express();

const PORT = process.env.PORT || 3100;

app.use(morgan('dev'));
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));

app.use('/game', questions)
app.use('/user', users)
app.use('/stat', statistics)

app.listen(PORT, () => {
  console.log(`success`, PORT);
});
