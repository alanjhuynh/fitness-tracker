const express = require('express');
const passport = require('passport');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const connectDB = require('./config/db');
const lifts = require('./routes/api/lifts');
const users = require('./routes/api/users');

if (process.env.MODE_ENV !== 'production') {
  require('dotenv').config();
}
require("./strategies/JwtStrategy")
require("./strategies/LocalStrategy")
require("./authenticate")

console.log(eval(process.env.REFRESH_TOKEN_EXPIRY) * 1000)

connectDB();

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

const whitelist = process.env.WHITELISTED_DOMAINS ? process.env.WHITELISTED_DOMAINS.split(",") : []

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}

app.use(cors({ corsOptions }));

// app.use(express.json({ extended: false }));

// app.use(require('express-session')({
//   secret: '<secret here>',
//   resave: false,
//   saveUninitialized: false
// }));

app.use(passport.initialize());
// app.use(passport.session());


const User = require('./models/User');
  
// const LocalStrategy = require('passport-local').Strategy;
// passport.use(new LocalStrategy(User.authenticate()));

app.get('/', (req, res) => {
  res.send({status: 'success'})
});

app.use('/api/lifts', lifts);
app.use('/api/users', users);

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}.`)
});