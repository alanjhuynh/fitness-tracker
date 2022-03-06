const express = require('express');
const passport = require('passport');
const connectDB = require('./config/db');
var cors = require('cors');
const lifts = require('./routes/api/lifts');
const users = require('./routes/api/users');
const app = express();
const port = 8080;

connectDB();
app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.use(require('express-session')({
  secret: '<secret here>',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


const User = require('./models/User');
  
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(User.authenticate()));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/api/lifts', lifts);
app.use('/api/users', users);

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}.`)
});