const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const lifts = require('./routes/api/lifts');
const app = express();
const port = 8080;

connectDB();
app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/api/lifts', lifts);

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}.`)
});